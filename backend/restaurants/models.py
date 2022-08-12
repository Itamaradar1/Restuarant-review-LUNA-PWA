from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


def restaurant_directory_path(instance, filename):
    # id = len(Restaurant.objects.all()) + 1
    return f'restaurants/{instance.name}/{filename}'


class Restaurant(models.Model):
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='restaurants_owned', blank=True)
    name = models.CharField(max_length=100, blank=True)
    street = models.CharField(max_length=40, blank=True)
    image = models.ImageField(blank=True, upload_to=restaurant_directory_path)
    category = models.CharField(max_length=40, blank=True)
    website = models.URLField(max_length=100, blank=True)
    opening_hours = models.CharField(max_length=300, blank=True)
    price_level = models.IntegerField(null=True)
    city = models.CharField(max_length=40, blank=True)
    zip = models.CharField(max_length=40, blank=True)
    phone = models.CharField(max_length=15, blank=True)
    email = models.CharField(max_length=40, blank=True)
    liked_by = models.ManyToManyField(to=User, related_name='likes_restaurants', blank=True)
    created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'Restaurant {self.pk}: {self.name} - {self.category}'
