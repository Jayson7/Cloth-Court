from django.db import models
from user_profile.models import User 
from vendors.models import Vendor

# Create your models here.

class PreviousPaymemts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    date_of_payment = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    vendor = models.ForeignKey()
    
    

class PaymentStatus(models.Model):
    pass 


