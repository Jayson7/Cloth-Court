
from django.contrib import admin
from django.urls import path, include
from products.views import *
from rest_framework_simplejwt.views import ( # type: ignore
    TokenObtainPairView,
    TokenRefreshView,
)





urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', include('vendors.urls')),
    path('', include('products.urls')),
    path('api/products/', ClothesProductListView.as_view(), name='products-list'),
    path('', include('user_profile.urls')),
]



