# Generated by Django 5.1.1 on 2024-10-06 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='clothesproduct',
            name='discount',
            field=models.CharField(default='33%', max_length=20),
        ),
        migrations.AddField(
            model_name='clothesproduct',
            name='previous_price',
            field=models.IntegerField(default=0),
        ),
    ]
