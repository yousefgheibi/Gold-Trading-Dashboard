# Generated by Django 3.2.5 on 2021-07-28 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='baseuser',
            name='photo',
            field=models.ImageField(default='default.jpg', upload_to='users_image'),
        ),
    ]
