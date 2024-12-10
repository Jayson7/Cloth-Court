from django.urls import path
from .views import *

urlpatterns = [
    path('api/latest-products/', FetchLatestProducts.as_view(), name='latest-products'),
    path('product/<int:product_id>/', ViewProduct, name='view-product'),

]
