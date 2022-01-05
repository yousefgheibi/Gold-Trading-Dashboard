from django.contrib import admin
from.models import BaseUser
from rest_framework.authtoken.models import Token
# Register your models here.

admin.site.register(BaseUser)