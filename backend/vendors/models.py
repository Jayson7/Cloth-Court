from django.db import models

class Vendor(models.Model):
    name_of_organization = models.CharField(max_length=30)
    rating = models.PositiveIntegerField(default=0, blank=True)
    address = models.CharField(max_length=100)
    total_sales = models.IntegerField(default=0, blank=True)
    products = models.ManyToManyField('products.ClothesProduct', null=True, blank=True, related_name='product_in_stock')  # Use string reference here

    def __str__(self):
        return str(self.name_of_organization)
