from django.db import models
from django.db import models
from django.db.models.deletion import CASCADE
from users.models import BaseUser
from PIL import Image
import uuid
from django.utils import timezone

### static data for enum fields in data base ###
Unit = (('Geram','1' ), ('Methghal','2' ))
Product_Type = (('Gold','1' ), ('Coin','2' ), ('Jewlery', '3'))
Payment_Type = (('Cash','1' ), ('Card to Card','2' ), ('Card Reader','3' ))

### urls ###
default_image_url = 'default.jpg'
upload_image_url = 'product_images'


### products
# this model is for gathering product info gold,jewelry,coin
class Products(models.Model):
    id=models.UUIDField(default=uuid.uuid4,primary_key=True,editable=False)
    seller = models.ForeignKey(BaseUser, on_delete=models.CASCADE,related_name="product")
    product_name = models.CharField(max_length=255)
    product_type=models.CharField(max_length=255,choices=Product_Type,default=1)
    info=models.CharField(max_length=755,default='gold')
    image = models.ImageField(default=default_image_url, upload_to=upload_image_url)
    unit = models.CharField(max_length=55, choices=Unit, default=1)
    weight = models.FloatField(default=0.0)
    number=models.IntegerField(default=0)
    date=models.DateTimeField(default=timezone.now)
    comment = models.CharField(max_length=755,null=True,blank=True)


    def save(self, *args, **kwargs):
        img = Image.open(self.image.path)
        img.thumbnail((500, 500))
        img.save(self.image.path)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.product_name}({self.id})"


### factor 
class Factor(models.Model):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    seller = models.ForeignKey(BaseUser, on_delete=models.CASCADE,related_name='seller')
    buyer_name=models.CharField(max_length=225)
    payment_type = models.CharField(max_length=255,choices=Payment_Type, default=1)
    total_price = models.CharField(max_length=255)
    tax =models.CharField(max_length=255)
    discount = models.CharField(max_length=255)
    comment = models.CharField(max_length=755,null=True,blank=True)
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.seller}({self.id})"


### factor's product 
# when we want to create a factor this models is for a products that we add to a factor 
class FactorProduct(models.Model):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    factor=models.ForeignKey(Factor, on_delete=CASCADE,null=True,related_name='factor_product')
    product_name=models.CharField(max_length=225)
    unit = models.CharField(max_length=55, choices=Unit, default=1)
    weight=models.FloatField(default=0.0)
    product_type = models.CharField(max_length=255,choices=Product_Type, default=1)
    price = models.CharField(max_length=255,default=0)
    number=models.IntegerField(default=0)
    comment=models.CharField(max_length=225)


### message ###
class Message(models.Model):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    reciever=models.ForeignKey(BaseUser,on_delete=CASCADE,null=True,blank=True)
    content=models.CharField(max_length=755)
    date=models.DateTimeField(default=timezone.now)