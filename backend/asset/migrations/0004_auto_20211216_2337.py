# Generated by Django 3.2.5 on 2021-12-16 18:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0004_auto_20211210_0034'),
        ('asset', '0003_sap_asset'),
    ]

    operations = [
        migrations.CreateModel(
            name='Barcode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asset_id', models.CharField(max_length=20, unique=True)),
                ('barcode_id', models.CharField(default=None, max_length=20, unique=True)),
            ],
            options={
                'db_table': 'barcode',
            },
        ),
        migrations.AlterField(
            model_name='asset',
            name='barcode_id',
            field=models.CharField(default=None, max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='asset',
            name='room_no',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='location.location'),
        ),
    ]