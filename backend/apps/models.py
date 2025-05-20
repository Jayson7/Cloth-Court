from django.db import models
from user_profile.models import User
from shipping.models import ShippingAddress
from vendors.models import Vendor
from Rider.models import RiderProfile
from payments.models import PaymentStatus
class Order(models.Model):
    product = models.CharField(max_length=200)
    quantiy= models.IntegerField(default=1)
    client = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    paid = models.BooleanField(default=False)
    shipping_address = models.ForeignKey(ShippingAddress, on_delete=models.CASCADE, blank=False)
    vendor = models.ForeignKey(Vendor, blank=False, on_delete=models.CASCADE)
    payment_menthod = models.ForeignKey(PaymentStatus)
    rider = models.ForeignKey(RiderProfile, blank=True, on_delete=models.CASCADE)