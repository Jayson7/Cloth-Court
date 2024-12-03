from rest_framework import serializers
from .models import ClothesProduct, Category, ProductSize, ProductImage

class ClothesProductSerializer(serializers.ModelSerializer):
    category_display = serializers.SerializerMethodField()
    gender_display = serializers.SerializerMethodField()

    class Meta:
        model = ClothesProduct
        fields = [
            'id', 'title', 'categories', 'category_display', 'gender', 
            'gender_display', 'description', 'price', 'stock', 'previous_price', 
            'discount', 'rating', 'views', 'main_image', 'sizes_available', 'date_created'
        ]

    def get_category_display(self, obj):
        return [category.name for category in obj.categories.all()]

    def get_gender_display(self, obj):
        return obj.get_gender_display()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = ['id', 'size']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'product']
