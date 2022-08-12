from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.response import Response
from .serializers import UsersSerializer

User = get_user_model()


# api/users/
# get all users
class ListUserAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = []


# get a specific user by ID
class RetrieveUserByIDAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = []


# search for a user
class SearchUserByStringAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'email', 'location', 'phone_number', 'things_i_love']


# Get logged in user profile
class GetPatchUserMeAPIView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


    def patch(self, request, *args, **kwargs):
        instance = self.request.user
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)



