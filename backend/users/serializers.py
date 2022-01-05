from rest_framework import serializers
from .models import BaseUser
from django.contrib.auth.models import User

# user
class BaseUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=BaseUser
        fields=['id','email','username','first_name','last_name','phone','photo']

    
class FiltredBaseUser(serializers.ModelSerializer):
        class Meta:
            model=BaseUser
            fields=['first_name','last_name']

