from django.contrib import admin

from .models import Category, ClothesProduct, ProductSize, ProductImage

# Register the actual models
admin.site.register(Category)
admin.site.register(ClothesProduct)
admin.site.register(ProductSize)
admin.site.register(ProductImage)
