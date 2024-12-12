from django.urls import path
from .views import *

urlpatterns = [
    path('api/latest-products/', FetchLatestProducts.as_view(), name='latest-products'),
    path('api/products/<int:pk>/', ViewProduct, name='view-product'),

]
