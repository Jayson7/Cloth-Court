
from django.contrib import admin
from django.urls import path, include
from products.views import *
from rest_framework_simplejwt.views import ( # type: ignore
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static




urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', include('vendors.urls')),
    path('', include('products.urls')),
    path('api/products/', ClothesProductListView.as_view(), name='products-list'),
    path('', include('user_profile.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



