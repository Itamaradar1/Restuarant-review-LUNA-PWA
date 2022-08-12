from django.contrib.auth import get_user_model
from django.db import models

from restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    content = models.CharField(max_length=200)
    rating = models.IntegerField(choices=[(1, "1 star"), (2, "2 stars"), (3, "3 stars"), (4, "4 stars"), (5, "5 stars")])
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='reviews', blank=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='reviews', blank=True)
    liked_by = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='liked_reviews', blank=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Review ID {self.pk}  Posted by : {self.author}'

