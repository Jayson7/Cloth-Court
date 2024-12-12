from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ClothesProduct, Category, ProductSize, ProductImage
from .serializer import ClothesProductSerializer, CategorySerializer, ProductSizeSerializer, ProductImageSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# View for listing all products
class ClothesProductListView(APIView):
    def get(self, request):
        products = ClothesProduct.objects.all()
        serializer = ClothesProductSerializer(
            products, many=True, context={'request': request}  # Pass the request context
        )
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

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Fetch latest products
class FetchLatestProducts(APIView):
    def get(self, request):
        # Fetch the last 20 products
        latest_products = ClothesProduct.objects.all().order_by('-date_created')[:20]
        
        # Serialize the datafor product in latest_products:
        serializer = ClothesProductSerializer(
            latest_products, many=True, context={'request': request}  # Pass the request context
        )
        return Response(serializer.data, status=status.HTTP_200_OK)

# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



def ViewProduct(request, pk):
    if request.method == "GET":
        product = get_object_or_404(ClothesProduct, id=pk)
        product.views =+1 # Increment views only for the viewed product
        product.save()
        serializer = ClothesProductSerializer(product, context={'request': request})
        return JsonResponse(serializer.data, safe=False, status=200)
    return JsonResponse({"error": "Method not allowed"}, status=405)


