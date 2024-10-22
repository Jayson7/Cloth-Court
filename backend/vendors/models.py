from django.db import models
from products.models import ClothesProduct

# Create your models here.

class Vendor(models.Model):
    name_of_organization = models.CharField(max_length=30)
    rating = models.PositiveIntegerField(defaut=0, blank=True)
    address = models.CharField(max_length=100)
    total_sales = models.IntegerField(default=0, blank=True)
    products = models.ManyToManyField(ClothesProduct, null=True, blank=True )
    
    def __str__(self):
        return str(self.name_of_organization)
    