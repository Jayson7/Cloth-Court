from django.db import models

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


class ClothesProduct(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(
        max_length=20,
        choices=Categories.choices,
        default=Categories.OTHERS,
    )
    gender = models.CharField(
        max_length=6,
        choices=Gender.choices,
        default=Gender.MALE,
    )
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    previous_price = models.IntegerField(default=0)
    discount = models.CharField(max_length=20, default='33%')

    def __str__(self):
        return f"{self.title} - {self.get_category_display()} - {self.get_gender_display()}"
