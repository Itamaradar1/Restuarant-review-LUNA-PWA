from django.urls import path

from comments.views import GetCommentFromSpecificUserAPIView, PostCommentFromSpecificUserAPIView, DeleteCommentAPIView, \
    SearchRestaurantsReviewsUsersAPIView

urlpatterns = [
    # Endpoint for global search
    path('<str:search_string>', SearchRestaurantsReviewsUsersAPIView.as_view()),
    # Endpoint for list off all comments from specific user
    path('comment/<int:user_id>/', GetCommentFromSpecificUserAPIView.as_view()),
    # create new comment for specific review
    path('comment/new/<int:review_id>/', PostCommentFromSpecificUserAPIView.as_view()),

    path('comment/<int:id>/', DeleteCommentAPIView.as_view()),
]
