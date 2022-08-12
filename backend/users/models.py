
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return f'{instance.id}/{filename}'


class User(AbstractUser):
    # Field used for login
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username_validator = UnicodeUsernameValidator()
    location = models.CharField(max_length=20, blank=True)
    phone = models.IntegerField(null=True)
    things_i_love = models.CharField(max_length=100, blank=True)
    profile_description = models.CharField(max_length=120, blank=True)
    profile_picture = models.ImageField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    username = models.CharField(
        "username",
        max_length=150,
        unique=True,
        validators=[username_validator],
        blank=True,
        null=True,
    )


    def __str__(self):
        return f'User {self.pk}: {self.email}'
