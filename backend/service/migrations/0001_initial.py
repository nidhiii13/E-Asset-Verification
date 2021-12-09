# Generated by Django 3.2.5 on 2021-12-09 19:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('asset', '0002_asset_room_no'),
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
            options={
                'db_table': 'service',
            },
        ),
    ]
