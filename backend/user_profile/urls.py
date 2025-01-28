from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView
from .views import *

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/logout/', TokenBlacklistView.as_view(), name='token_blacklist'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/users/', ListUsersView.as_view(), name='list_users'),
    path('api/users/edit/', EditUserView.as_view(), name='edit_user'),  # For self-edit
    path('api/users/edit/<int:user_id>/', EditUserView.as_view(), name='edit_user_admin'),  # For admin editing
]

