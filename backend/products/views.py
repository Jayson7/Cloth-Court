from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ClothesProduct, Category, ProductSize, ProductImage
from .serializer import ClothesProductSerializer, CategorySerializer, ProductSizeSerializer, ProductImageSerializer

# View for listing all products
class ClothesProductListView(APIView):
    def get(self, request):
        products = ClothesProduct.objects.all()
        serializer = ClothesProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View for fetching all categories
class FetchAllCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View for fetching all available product sizes
class FetchAllProductSizes(APIView):
    def get(self, request):
        sizes = ProductSize.objects.all()
        serializer = ProductSizeSerializer(sizes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View for creating a new product image
class ProductImageCreateView(APIView):
    def post(self, request):
        serializer = ProductImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# fetch latest products 

class FetchLatestProducts(APIView):
    def get(self, request):
        # Fetch the last 20 products
        latest_products = ClothesProduct.objects.all().order_by('-date_created')[:20]
        
        # Serialize the data
        serializer = ClothesProductSerializer(latest_products, many=True)
        return Response(serializer.data)