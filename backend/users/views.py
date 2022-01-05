from rest_framework import generics
from .serializers import BaseUserSerializer
from .models import BaseUser
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from rest_framework.permissions import IsAuthenticated

### user ###
# this view is for creating new user
class UserList(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    queryset=BaseUser.objects.all()
    serializer_class=BaseUserSerializer

# this is for deleting editing and retrieving a user
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=BaseUser.objects.all()
    serializer_class=BaseUserSerializer
