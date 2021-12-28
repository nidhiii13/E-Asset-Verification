# Generated by Django 3.2.5 on 2021-12-06 17:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0001_initial'),
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=False)),
                ('remarks', models.TextField()),
                ('service_count', models.IntegerField()),
                ('asset_id', models.ForeignKey(max_length=20, on_delete=django.db.models.deletion.CASCADE, to='asset.asset')),
            ],
        ),
    ]