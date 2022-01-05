from django.db.models.signals import post_save, pre_delete
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from .models import BaseUser
import os


@receiver(pre_delete,sender=BaseUser)
def delete_user(sender,instance,using,**kwargs):
    path=instance.photo.path
    if os.path.basename(path)!='default.jpg' and os.path.exists(path):
        os.remove(path) 
