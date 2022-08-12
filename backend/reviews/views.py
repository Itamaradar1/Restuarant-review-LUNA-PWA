from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView, GenericAPIView, \
    ListAPIView
from rest_framework.response import Response
from restaurants.models import Restaurant
from restaurants.serializers import RestaurantSerializer
from .models import Review
from .serializers import ReviewSerializer, ToggleLikeReviewSerializer, GetAllReviewsFromUsersSerializer, \
    GetLikedReviewsSerializer

User = get_user_model()


# retrieve/create reviews from/for specific restaurant
class GetCreateReviewsForSingleRestaurant(ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(restaurant=kwargs['restaurant_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=200)

    def post(self, request, *args, **kwargs):
        restaurant = Restaurant.objects.filter(id=kwargs['restaurant_id'])[:1].get()
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(restaurant=restaurant, author=request.user)
        return Response(serializer.data, status=201)


# retrieve all reviews from specific user
class GetReviewsFromUser(GenericAPIView):
    queryset = Review.objects.all().order_by('-created')
    serializer_class = ReviewSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author=kwargs['user_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# Like/remove like for a review.
class ToggleLikeReviewAPIView(GenericAPIView):
    serializer_class = ToggleLikeReviewSerializer
    permission_classes = []
    lookup_field = 'review_id'

    def post(self, request, *args, **kwargs):
        liked_reviews_by_user = request.user.liked_reviews.all()
        review = Review.objects.get(id=kwargs.get('review_id'))
        if review in liked_reviews_by_user:
            request.user.liked_posts.remove(review)
        else:
            request.user.liked_reviews.add(review)
        return Response(status=status.HTTP_200_OK)


# Get the list of the reviews the current user liked.
class GetLikedReviewsAPIView(RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = GetLikedReviewsSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        liked_reviews_by_user = request.user.liked_reviews.all()
        serializer = self.get_serializer(liked_reviews_by_user, many=True)
        return Response(serializer.data)


# Get the list of the reviews the current user commented.
class GetReviewsUserCommentedAPIView(RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = GetLikedReviewsSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        commented_reviews_by_user = request.user.comments.all()
        serializer = self.get_serializer(commented_reviews_by_user, many=True)
        return Response(serializer.data)


# Get/patch/delete a specific reviews
class GetUpdateDeleteReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = GetLikedReviewsSerializer
    permission_classes = []


# get four best reviewed restaurants
class ListFourBestRestaurantAPIView(ListAPIView):
    queryset = Restaurant.objects.all().order_by('-reviews')
    serializer_class = RestaurantSerializer
    permission_classes = []