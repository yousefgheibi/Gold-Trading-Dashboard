from rest_framework.views import APIView
from .models import *
from .serializers import *
from .currency_prices import get_currency_prices
from rest_framework import viewsets, mixins,status,generics
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
class LowNumberPagination(PageNumberPagination):
    page_size = 2
    page_size_query_param = "pagination"
    max_page_size = 2


class ProductList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class = FilteredProductSerializer

    def get_queryset(self):
        return Products.objects.filter(seller=self.kwargs["user"]).order_by("-date")


class ProductsViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,
):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    queryset = Products.objects.all()
    serializer_class = ProductSerializer


###
# Factor
# for creating factor and it's products
class FactorViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin,):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    queryset = Factor.objects.all()
    serializer_class = FactorSerializer


# this gave us all factor of a user by it's id
# this for report page of the website
class UserFactorProduct(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class = SimpleFactorSerializer
    pagination_class = LowNumberPagination

    def get_queryset(self):
        return Factor.objects.filter(seller=self.kwargs["user"])


###
# message view
# last five message in data base
class MessageList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.all().order_by("-date")[:5]


# last five message of a user by id
class UserMessagesList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(reciever=self.kwargs["user"]).order_by("-date")[:5]


###
# Dashboard
# this view give us the last 3 product(gold,coin,jewelry) that created
class DashboradProductList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class = FilteredProductSerializer

    def get_queryset(self):
        return Products.objects.filter(seller=self.kwargs["user"]).order_by("-date")[:3]


class DashboardFactorList(generics.ListAPIView):
    serializer_class=FiltredFactorSerializer

    def get_queryset(self):
        return Factor.objects.filter(seller=self.kwargs['user']).order_by('-date')[:4]


class DailyProfitList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class=DailyPriceSerializer
          
    def get_queryset(self):
        query="""
            select 
            1 id , 
            sum(cast(total_price as int )) - sum(cast(tax as int)) - sum(cast (discount as int)) as price, DATE(date)
            from products_factor 
            where DATE(date)  > DATE((CURRENT_DATE - interval '30 days') ) 
            and products_factor.seller_id = %s
            group by DATE(date) 
        """
        return Factor.objects.raw(query,[self.kwargs['user']])

class MonthlyProfitList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTTokenUserAuthentication]
    serializer_class=MonthlyPriceSerializer

    def get_queryset(self):
        query="""
            select 1 id,
            sum(cast(total_price as int )) - sum(cast(tax as int)) - sum(cast (discount as int)) as price ,
            to_char(date,'Mon') as month,
            extract(year from date) as year
            from products_factor 
            where extract(month from DATE(date))  > extract(month from DATE(CURRENT_DATE)) - 12
            and products_factor.seller_id = %s
            group by 3,4
        """
        return Factor.objects.raw(query , [self.kwargs['user']])


class CurrensyPriceList(generics.ListAPIView):

    def list(self, request):
        data=get_currency_prices()
        return Response({'currency':data},status=status.HTTP_200_OK)