from django.urls import path
from .views import FetchLatestProducts

urlpatterns = [
    path('api/latest-products/', FetchLatestProducts.as_view(), name='latest-products'),

]
