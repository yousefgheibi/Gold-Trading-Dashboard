from django.db.models import base
from django.urls import path
from django.urls.conf import include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *
from rest_framework.routers import DefaultRouter

factor_router=DefaultRouter()
factor_router.register('',FactorViewSet,basename='factor')

product_router=DefaultRouter()
product_router.register('',ProductsViewSet,basename='products')

urlpatterns = [
    path('product-list/<str:user>/',ProductList.as_view(),name='product-list'),
    path('product/',include(product_router.urls)),
    path('product/<str:pk>/',include(product_router.urls)),
    path('factor/',include(factor_router.urls)),
    path('factor/<str:pk>/',include(factor_router.urls)),   
    path('user-factor/<str:user>/',UserFactorProduct.as_view(),name='user-factor'),   
    path('dashboard-factor/<str:user>/',DashboardFactorList.as_view(),name='dashboard-factor'),   
    path('message-list/', MessageList.as_view(),name="message-list"),
    path('user-message-list/<str:user>/', UserMessagesList.as_view(),name="user-message-list"),
    path('dashboard-product-list/<str:user>/', DashboradProductList.as_view(),name="product-list"),
    path('daily-profit-list/<str:user>/', DailyProfitList.as_view(),name="daily-profit-list"),
    path('monthly-profit-list/<str:user>/', MonthlyProfitList.as_view(),name="monthly-profit-list"),
    path('currensy-price/', CurrensyPriceList.as_view(),name="currensy-price-list"),
]