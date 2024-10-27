from django.db import models

# Available sizes list
size_choices = [
    ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'),
    # ... rest of the size choices
]

Categories = [
   ( 'CASUAL'), ('Casual'),
    ('DRESSES'), ('Dresses'),
   ('UNDERWEAR'),( 'Underwear'),
   ( 'TOP_TEES'), ('Top and Tees'),
    # ... other categories
]
class Gender(models.TextChoices):
    MALE = 'MALE', 'Male'
    FEMALE = 'FEMALE', 'Female'
    UNISEX = 'UNISEX', 'Unisex'

# Model for Clothes Product
class ClothesProduct(models.Model):
    title = models.CharField(max_length=100)
    categories = models.ManyToManyField('Category')
    gender = models.CharField(
        max_length=6,
        choices=Gender.choices,
        default=Gender.UNISEX,
    )
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    previous_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    discount = models.CharField(max_length=20, default='33%')
    rating = models.PositiveIntegerField(default=0)
    views = models.PositiveIntegerField(default=0)
    main_image = models.ImageField(upload_to='products/', null=True, blank=True)
    other_images = models.ManyToManyField('ProductImage', blank=True)
    vendor = models.ForeignKey('vendors.Vendor', on_delete=models.CASCADE, blank=False, null=True)  # String reference here
    sizes_available = models.ManyToManyField('ProductSize', blank=True)

    def __str__(self):
        return f"{self.title} - {self.get_gender_display()}"

# Model for Sizes
class ProductSize(models.Model):
    size = models.CharField(max_length=5, choices=size_choices)

    def __str__(self):
        return self.size

# Model for Categories
class Category(models.Model):
    name = models.CharField(max_length=50, choices=Categories.choices, unique=True)

    def __str__(self):
        return self.get_name_display()

# Model for Product Images
class ProductImage(models.Model):
    image = models.ImageField(upload_to='products/other_images/')
    product = models.ForeignKey(ClothesProduct, on_delete=models.CASCADE, related_name='image_product', blank=False, null=False)

    def __str__(self):
        return f"Image for product"
