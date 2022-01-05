from django.db import models
import uuid
from PIL import Image
from django.contrib.auth.models import AbstractUser

class BaseUser(AbstractUser):
    id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    email=models.EmailField(unique=True)
    username=models.CharField(max_length=255,unique=True)
    first_name=models.CharField(max_length=255,null=True,blank=True)
    last_name=models.CharField(max_length=255,null=True,blank=True)
    phone=models.CharField(max_length=15,null=True,blank=True)
    photo=models.ImageField(default='default.jpg',upload_to='users_image')
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    def save(self, *args, **kwargs) :
        super(BaseUser, self).save(*args, **kwargs)
        img=Image.open(self.photo)
        img.thumbnail((500,500))
        img.save(self.photo.path)