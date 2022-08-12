from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework.generics import CreateAPIView, GenericAPIView, get_object_or_404
from rest_framework.permissions import AllowAny
from django.core.mail import EmailMessage
from rest_framework.response import Response

from .serializers import UserRegistrationSerializer, UserSerializer

User = get_user_model()


class RegisterUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserValidation(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = []
    lookup_field = "email"

    def get_object(self):
        obj = get_object_or_404(self.get_queryset().filter(email=self.request.data['email']))
        return obj

    def patch(self, request, *args, **kwargs):
        user_to_be_validated = self.get_object()
        serializer = self.get_serializer(user_to_be_validated, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(password=make_password(serializer.validated_data['password']))
        return Response(serializer.data, status=200)
