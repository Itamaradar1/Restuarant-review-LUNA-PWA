from django.urls import path

from .views import ListRestaurantAPIView, CreateNewRestaurantAPIView, RetrieveUpdateDeleteRestaurantByIDAPIView, \
    GetAllRestaurantsCreatedByUser, SearchRestaurantByStringAPIView, GetRestaurantsByCategory

urlpatterns = [
# /restaurants
# get all restaurants
path('', ListRestaurantAPIView.as_view()),
# create new restaurant
path('new/', CreateNewRestaurantAPIView.as_view()),
# get restaurant by category
path('category/<str:category>/', GetRestaurantsByCategory.as_view()),
# get all restaurants created by a specific user
path('user/<int:owner>/', GetAllRestaurantsCreatedByUser.as_view()),
# get/update/delete restaurant by id
path('<int:pk>/', RetrieveUpdateDeleteRestaurantByIDAPIView.as_view()),
# search restaurants
path('search/', SearchRestaurantByStringAPIView.as_view()),
]