# Generated by Django 3.2.5 on 2021-08-30 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20210830_1744'),
    ]

    operations = [
        migrations.AddField(
            model_name='coin',
            name='image',
            field=models.ImageField(default='coin.png', upload_to='product_images'),
        ),
    ]