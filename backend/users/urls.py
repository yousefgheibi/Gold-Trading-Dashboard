from .views import *
from django.urls  import path
from rest_framework.authtoken import views
from rest_framework_simplejwt import views as obtain_view

urlpatterns=[
    path('token/',obtain_view.TokenObtainPairView.as_view(),name='token-obtain-pair'),
    path('token/refresh/',obtain_view.TokenRefreshView.as_view(),name='token-refresh-view'),
    path('user-list/',UserList.as_view(),name="user-list"),
    path('user-detail/<str:pk>/',UserDetail.as_view(),name='user-detail'),
]