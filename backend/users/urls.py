from django.urls import path
from users.views import ListUserAPIView, RetrieveUserByIDAPIView, SearchUserByStringAPIView, GetPatchUserMeAPIView


urlpatterns = [
    # api/users
    path('list/', ListUserAPIView.as_view()),
    path('<str:search_string>/', SearchUserByStringAPIView.as_view()),
    path('<int:pk>/', RetrieveUserByIDAPIView.as_view()),
    # api/me
    path('', GetPatchUserMeAPIView.as_view()),

]
