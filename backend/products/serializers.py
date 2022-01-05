from django.db.models import fields
from rest_framework import  serializers
from rest_framework.fields import SlugField
from .models import *
from users.models import BaseUser
from users.serializers import FiltredBaseUser
###
# product
# this serializer will serialize all column of product model
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__'


# this serializer will serialize five column of product model(id , name ,comment ,image ,date)
class FilteredProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields=['id','product_name','comment','image','date']


###
# factor
# this serializer is for factorproduct model
class FactorProductSerializer(serializers.ModelSerializer):
     class Meta:
         model=FactorProduct
         fields='__all__'
        

# this is nested serializer that will connect factor prodct to factor
class FactorSerializer(serializers.ModelSerializer):
    factor_product=FactorProductSerializer(many=True)

    def create(self,validated_data):
        factor_product=validated_data.pop('factor_product')
        factor=Factor.objects.create(**validated_data)
        for product in factor_product:
            FactorProduct.objects.create(factor=factor,**product)
        return factor


    def update(self,instance,validated_data):
        factor_product=validated_data.pop('factor_product')
        FactorProduct.objects.filter(factor=instance.id).delete()
        for product in factor_product:
            FactorProduct.objects.create(**product)
        return super().update(instance, validated_data)
    
    class Meta:
        model = Factor
        fields = ['id','seller',
                'payment_type','total_price',
                'tax','discount','comment','factor_product'] 


class SimpleFactorSerializer(serializers.ModelSerializer):

    class Meta:
        model=Factor
        fields='__all__'
 

# factor prducts
# this api store some info about the gold and coin and jewelry in case of creating a factor 
# and also it can list golds coins and jewelry of a user 
class FactorProductSerializer(serializers.ModelSerializer):
    gold=serializers.HyperlinkedIdentityField(read_only=True,view_name='user-gold-list')
    coin=serializers.HyperlinkedIdentityField(read_only=True,view_name='user-coin-list')
    jewelry=serializers.HyperlinkedIdentityField(read_only=True,view_name='user-jewelry-list')

    class Meta:
        model=BaseUser
        fields=['id','username','gold','coin','jewelry']


class FiltredFactorSerializer(serializers.ModelSerializer):
    seller=FiltredBaseUser()
    class Meta:
        model=Factor
        fields=['id','date','total_price','seller']


# messages
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Message
        fields='__all__'


class DailyPriceSerializer(serializers.Serializer):
    price=serializers.CharField(max_length=255)
    date=serializers.DateField()


class MonthlyPriceSerializer(serializers.Serializer):
    price=serializers.CharField(max_length=255)
    month=serializers.CharField(max_length=25)
    year=serializers.CharField(max_length=25)

