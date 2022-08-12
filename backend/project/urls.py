"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views

schema_view = get_schema_view(
   openapi.Info(
      title="Luna Project Team 3 API official Documentaion",
      default_version='v1',
      description="Restaurant reviewer",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="learn@propulsionacademy.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,# Set to False restrict access to protected endpoints
   permission_classes=(permissions.AllowAny,),# Permissions for docs access
)

BASE_URL = 'backend/api/'

urlpatterns = [
    # admin
    path(BASE_URL + 'admin/', admin.site.urls),

    # login
    path(BASE_URL + 'auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(BASE_URL + 'auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path(BASE_URL + 'auth/token/verify', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),

    # docs
    path(BASE_URL + 'docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

    # registration
    path(BASE_URL + 'registration/', include('registration_profile.urls')),

    # search
    path(BASE_URL + 'search/', include('comments.urls')),

    # home
    path(BASE_URL + 'home/', include('restaurants.urls')),

    # restaurant
    path(BASE_URL + 'restaurants/', include('restaurants.urls')),

    # reviews
    path(BASE_URL + 'reviews/', include('reviews.urls')),

    # comments
    path(BASE_URL + 'review/', include('comments.urls')),

    # categories
    # path(BASE_URL + 'category/', include('???')),

    # users - Me
    path(BASE_URL + 'me/', include('users.urls')),

    # users
    path(BASE_URL + 'users/', include('users.urls')),
]
