from django.urls import path


from .views import GetCreateReviewsForSingleRestaurant, ListFourBestRestaurantAPIView, GetUpdateDeleteReview, \
    ToggleLikeReviewAPIView, GetLikedReviewsAPIView, GetReviewsUserCommentedAPIView, GetReviewsFromUser


urlpatterns = [
    # api/home - list 4 best restaurants
    path('', ListFourBestRestaurantAPIView.as_view()),
    # api/reviews
    # Get/create  reviews for a single restaurant.
    path('restaurant/<int:restaurant_id>/', GetCreateReviewsForSingleRestaurant.as_view()),
    # Get the list of the reviews by a specific user.
    path('user/<int:user_id>/', GetReviewsFromUser.as_view()),
    # Get/update/delete a specific review by ID and display all the information.
    path('<int:review_id>/', GetUpdateDeleteReview.as_view()),
    # Like/remove like for a review.
    path('like/<int:review_id>/', ToggleLikeReviewAPIView.as_view()),
    # Get the list of the reviews the current user liked.
    path('likes/', GetLikedReviewsAPIView.as_view()),
    # Get the list of the reviews the current user commented
    path('comments/', GetReviewsUserCommentedAPIView.as_view()),
]