from products.models import  Factor, FactorProduct, Message, Products
from django.contrib import admin

admin.site.register(Products)
admin.site.register(Factor)
admin.site.register(FactorProduct)
admin.site.register(Message)