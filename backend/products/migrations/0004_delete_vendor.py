# Generated by Django 5.1.1 on 2024-10-22 16:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_category_productimage_productsize_vendor_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Vendor',
        ),
    ]