from rest_framework import serializers
from .models import ClothesProduct, Category, ProductSize, ProductImage

class ClothesProductSerializer(serializers.ModelSerializer):
    category_display = serializers.SerializerMethodField()
    gender_display = serializers.SerializerMethodField()
    main_image = serializers.SerializerMethodField()  # Add a method for absolute URL for images

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

    def get_main_image(self, obj):
        # Build an absolute URL for the main image
        request = self.context.get('request')
        if request and obj.main_image:
            return request.build_absolute_uri(obj.main_image.url)
        return None

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
