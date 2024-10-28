from django.db import models
from django.contrib.auth.models import User  # Assuming you have a User model

# Model for storing shipping addresses
class ShippingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=50)
    user_phone_number = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.user.username} - {self.user_address}"

# Model for tracking shipped products
class TrackShippedProduct(models.Model):
    order_id = models.CharField(max_length=100, unique=True)
    product = models.ForeignKey('products.ClothesProduct', on_delete=models.CASCADE)
    shipping_address = models.ForeignKey(ShippingAddress, on_delete=models.CASCADE)
    shipped_date = models.DateTimeField(null=True, blank=True)
    delivery_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(
        max_length=50,
        choices=[
            ('Pending', 'Pending'),
            ('Shipped', 'Shipped'),
            ('In Transit', 'In Transit'),
            ('Delivered', 'Delivered'),
            ('Returned', 'Returned'),
        ],
        default='Pending'
    )

    def __str__(self):
        return f"Order {self.order_id} - {self.status}"

# Model for order confirmations
class OrderConfirmation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_id = models.CharField(max_length=100, unique=True)
    products = models.ManyToManyField('products.ClothesProduct')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    confirmation_date = models.DateTimeField(auto_now_add=True)
    is_confirmed = models.BooleanField(default=False)

    def __str__(self):
        return f"Order {self.order_id} - Confirmed: {self.is_confirmed}"
