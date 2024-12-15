from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import *
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class RegisterView(APIView):
    def post(self, request):
        # Extract data from the request
        email = request.data.get('email')
        username = request.data.get('username')
        password = request.data.get('password')
        full_name = request.data.get('full_name', '')
 

        # Validate required fields
        if not email or not username or not password:
            return Response(
                {"error": "Email, username, and password are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if a user with the given email already exists
        if User.objects.filter(email=email).exists():
            return Response(
                {"error": "A user with this email already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create the user
        try:
            user = User.objects.create(
                email=email,
                username=username,
                password=make_password(password)  # Hash the password
            )
            # Automatically create the profile via the signal, then update its additional fields
            profile = user.profile
            profile.full_name = full_name
            
            profile.save()

            return Response(
                {"message": "User registered successfully."},
                status=status.HTTP_201_CREATED
            )
        except ValidationError as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# list users

class ListUsersView(APIView):
    # permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

    def get(self, request):
        # Get all users and their profiles
        users = User.objects.all()
        users_data = []

        for user in users:
            try:
                profile = user.profile  # Get the profile linked to the user
                users_data.append({
                    "email": user.email,
                    "username": user.username,
                    "full_name": profile.full_name,
                    
                    "verified": profile.verified,
                })
            except Profile.DoesNotExist:
                # Handle the edge case where a profile doesn't exist (shouldn't happen if signals work correctly)
                users_data.append({
                    "email": user.email,
                    "username": user.username,
                    "full_name": None,
                  
                    "verified": None,
                })

        return Response(users_data, status=status.HTTP_200_OK)


# edit users


class EditUserView(APIView):
    # permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

    def put(self, request, user_id=None):
        # Determine if the user is editing their own profile or an admin editing another user's profile
        try:
            if user_id:
                # Admin editing another user
                if not request.user.is_staff:
                    return Response(
                        {"error": "Permission denied. Only admins can edit other users."},
                        status=status.HTTP_403_FORBIDDEN
                    )
                user = User.objects.get(id=user_id)
            else:
                # User editing their own profile
                user = request.user

            # Update fields for User
            email = request.data.get('email', user.email)
            username = request.data.get('username', user.username)

            if User.objects.exclude(id=user.id).filter(email=email).exists():
                return Response(
                    {"error": "A user with this email already exists."},
                    status=status.HTTP_400_BAD_REQUEST
                )

            user.email = email
            user.username = username
            user.save()

            # Update fields for Profile
            profile = user.profile
            profile.full_name = request.data.get('full_name', profile.full_name)
       
            profile.verified = request.data.get('verified', profile.verified) if request.user.is_staff else profile.verified
            profile.save()

            return Response(
                {
                    "message": "User updated successfully.",
                    "user": {
                        "email": user.email,
                        "username": user.username,
                        "full_name": profile.full_name,
                        
                        "verified": profile.verified,
                    },
                },
                status=status.HTTP_200_OK
            )
        except ObjectDoesNotExist:
            return Response(
                {"error": "User not found."},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": f"An unexpected error occurred: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )