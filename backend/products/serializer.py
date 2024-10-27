from rest_framework import serializers # type: ignore
from .models import *

class ClothesProductSerializer(serializers.ModelSerializer):
    category_display = serializers.SerializerMethodField()
    gender_display = serializers.SerializerMethodField()

    class Meta:
        model = ClothesProduct
        fields = ['id', 'title', 'category', 'category_display', 'gender', 'gender_display', 'description', 'price', 'stock']

    def get_category_display(self, obj):
        return obj.get_category_display()

    def get_gender_display(self, obj):
        return obj.get_gender_display()


