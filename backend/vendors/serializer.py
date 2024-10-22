from rest_framework import serializers
from .models import Vendor
from products.models import ClothesProduct

class ClothesProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothesProduct
        fields = ['id', 'name', 'price', 'description']  # Adjust fields according to your ClothesProduct model

class VendorSerializer(serializers.ModelSerializer):
    products = ClothesProductSerializer(many=True, read_only=True)

    class Meta:
        model = Vendor
        fields = ['id', 'name_of_organization', 'address', 'products']
