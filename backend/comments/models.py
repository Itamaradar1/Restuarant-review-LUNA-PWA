
from django.contrib.auth import get_user_model
from django.db import models

from reviews.models import Review

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=100)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='comments_made', blank=True)
    review = models.ForeignKey(to=Review, on_delete=models.CASCADE, related_name='comments', blank=True)
    created = models.DateTimeField(auto_now_add=True)
    liked_by = models.ManyToManyField(to=User, related_name='likes_comment', blank=True,)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'ID {self.pk} : on review : {self.pk} : from: {self.author}'

