from django.shortcuts import render
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView,\
    RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.response import Response

from .models import Restaurant
from .serializers import RestaurantSerializer


# get all restaurants
class ListRestaurantAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []


# Get the all the restaurants created by a specific user in chronological order.
class GetAllRestaurantsCreatedByUser(RetrieveAPIView):
    queryset = Restaurant.objects.all().order_by('pk')
    serializer_class = RestaurantSerializer
    permission_classes = []
    lookup_field = 'owner'

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(user=kwargs['user_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetRestaurantsByCategory(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(category=kwargs.get('category'))
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)



class SearchRestaurantByStringAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['category', 'name', 'city', 'zip', 'price_level']


# create new restaurant
class CreateNewRestaurantAPIView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# get/update/delete restaurant by id
class RetrieveUpdateDeleteRestaurantByIDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all().order_by('pk')
    serializer_class = RestaurantSerializer
    permission_classes = []


