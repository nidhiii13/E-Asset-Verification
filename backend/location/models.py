from django.db import models
from asset.models import Asset

# Create your models here.
class Location(models.Model):
    name=models.TextField()
    room_no=models.CharField(max_length=20)
    list_assets=models.IntegerField(max_length=20)

    class Meta:
        db_table='location'

class Service(models.Model):
    status=models.BooleanField(default=False)
    remarks=models.TextField()
    service_count=models.IntegerField()
    asset_id=models.ForeignKey(Asset,max_length=20,on_delete=models.CASCADE)

    class Meta:
        db_table='service'