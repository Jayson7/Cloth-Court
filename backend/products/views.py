from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ClothesProduct
from .serializer import ClothesProductSerializer

class ClothesProductListView(APIView):
    def get(self, request):
        products = ClothesProduct.objects.all()  # Fetch all ClothesProduct records
        serializer = ClothesProductSerializer(products, many=True)  # Serialize the data
        return Response(serializer.data, status=status.HTTP_200_OK)
