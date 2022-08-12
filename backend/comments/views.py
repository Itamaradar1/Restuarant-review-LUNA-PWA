
from rest_framework.generics import ListCreateAPIView, GenericAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import filters
from restaurants.models import Restaurant
from reviews.models import Review
from comments.models import Comment
from comments.serializers import CommentSerializer


# search restaurants/reviews/users
class SearchRestaurantsReviewsUsersAPIView(RetrieveAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []
    filter_backends = [filters.SearchFilter]
    search_fields = ['category']


# get a list off all comments from specific user
class GetCommentFromSpecificUserAPIView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author_id=kwargs['user_id'])
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=201)


# post comment for a specific review
class PostCommentFromSpecificUserAPIView(GenericAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []


    def post(self, request, *args, **kwargs):
        review = self.get_queryset().filter(review=kwargs['review_id'])
        serializer = self.get_serializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(review=review, author=request.user)
        return Response(serializer.data, status=201)


# delete a specific comment
class DeleteCommentAPIView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = []
    lookup_field = 'id'

