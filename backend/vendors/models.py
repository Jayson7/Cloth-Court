from django.db import models

# Create your models here.

class Vendor(models.Model):
    name_of_organization = models.CharField(max_length=30)
    rating = models.PositiveIntegerField(defaut=0)
    address = models.CharField(max_length=100)
    total_sales = models.IntegerField(default=0)
    
    
    def __str__(self):
        return str(self.name_of_organization)
    