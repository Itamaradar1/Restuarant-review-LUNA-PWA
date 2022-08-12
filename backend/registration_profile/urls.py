from django.urls import path

from .views import RegisterUser, UserValidation

urlpatterns = [
    # api/registration
    path('', RegisterUser.as_view()),
    path('validate/', UserValidation.as_view()),

    ]