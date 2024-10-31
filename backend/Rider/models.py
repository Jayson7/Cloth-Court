from django.db import models

class RiderProfile(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=255)
    vehicle_type = models.CharField(
        max_length=50,
        choices=[
            ('Bike', 'Bike'),
            ('Car', 'Car'),
            ('Truck', 'Truck'),
            ('Van', 'Van'),
        ],
        default='Bike'
    )
    license_number = models.CharField(max_length=50, unique=True)
    availability_status = models.BooleanField(default=True)
    profile_picture = models.ImageField(upload_to='rider_profiles/', null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)

    def __str__(self):
        return f"{self.full_name} - {self.vehicle_type}"

    class Meta:
        verbose_name_plural = "Rider Profiles"
