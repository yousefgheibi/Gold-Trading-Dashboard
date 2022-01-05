# Generated by Django 3.2.5 on 2021-08-30 14:43

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_coin_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='DashBoardProduct',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('image', models.ImageField(default='default.jpg', upload_to='product_images')),
                ('comment', models.CharField(blank=True, max_length=755, null=True)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'db_table': 'product',
                'managed': False,
            },
        ),
    ]
