from django.db import models

from vendors.models import Vendor

# Available sizes list
size_choices = [
    ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'),
    ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'),
    ('11', '11'), ('12', '12'), ('13', '13'), ('14', '14'),
    ('29', '29'), ('30', '30'), ('31', '31'), ('32', '32'),
    ('33', '33'), ('34', '34'), ('35', '35'), ('36', '36'),
    ('37', '37'), ('38', '38'), ('39', '39'), ('40', '40'),
    ('41', '41'), ('42', '42'), ('43', '43'), ('44', '44'),
    ('45', '45'), ('46', '46'), ('47', '47'), ('48', '48'),
    ('49', '49'), ('50', '50'),
    ('L', 'L'), ('M', 'M'), ('XL', 'XL'), ('XXL', 'XXL'), ('XXXL', 'XXXL'),
]

class Categories(models.TextChoices):
    CASUAL = 'CASUAL', 'Casual'
    DRESSES = 'DRESSES', 'Dresses'
    UNDERWEAR = 'UNDERWEAR', 'Underwear'
    TOP_TEES = 'TOP_TEES', 'Top and Tees'
    JEANS = 'JEANS', 'Jeans'
    SPORTSWEAR = 'SPORTSWEAR', 'Sportswear'
    SWIMSUIT = 'SWIMSUIT', 'Swimsuit'
    OTHERS = 'OTHERS', 'Others'

class Gender(models.TextChoices):
    MALE = 'MALE', 'Male'
    FEMALE = 'FEMALE', 'Female'
    UNISEX = 'UNISEX', 'Unisex'

# Model for Clothes Product
class ClothesProduct(models.Model):
    title = models.CharField(max_length=100)
    
    # Categories can now be multiple
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
    other_images = models.ManyToManyField('ProductImage', blank=True)  # Multiple images
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE, blank=False, null=True)
    # Multiple sizes field
    sizes_available = models.ManyToManyField('ProductSize', blank=True)  # Multiple sizes
    
    def __str__(self):
        return f"{self.title} - {self.get_gender_display()}"
    
# Separate model for Sizes
class ProductSize(models.Model):
    size = models.CharField(max_length=5, choices=size_choices)

    def __str__(self):
        return self.size

# Separate model for Categories (ManyToManyField)
class Category(models.Model):
    name = models.CharField(max_length=50, choices=Categories.choices, unique=True)

    def __str__(self):
        return self.get_name_display()

# Separate model for Product Images (ManyToManyField)
class ProductImage(models.Model):
    image = models.ImageField(upload_to='products/other_images/')

    def __str__(self):
        return f"Image for product"


    


