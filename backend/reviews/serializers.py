from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class ToggleLikeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class GetAllReviewsFromUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class GetLikedReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'