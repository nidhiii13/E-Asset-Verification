import barcode
from django.db import models
from django.db.models.deletion import CASCADE
from location.models import Location
from company.models import Company
from django.conf import settings

# Create your models here.
class Asset(models.Model):
    asset_id=models.CharField(max_length=20,unique=True,null=False)
    barcode_id=models.CharField(max_length=20,unique=True,default=None)
    cost_center=models.CharField(max_length=20)
    asset_description=models.TextField()
    capitalized_date=models.DateField()
    found_status=models.BooleanField(default=False)
    company_id=models.ForeignKey(Company,max_length=20,on_delete=models.CASCADE)
    room_no=models.ForeignKey(Location,on_delete=models.CASCADE)

    class Meta:
        db_table='asset'
    
    def __str__(self) :
        return self.asset_id

  
class SAP_Asset(models.Model):
    asset_id=models.CharField(max_length=20,unique=True,null=False)
    capitalized_date=models.DateField()
    cost_center=models.CharField(max_length=20)
    asset_description=models.TextField()
    
    class Meta:
        db_table='SAP_asset'
    
    def __str__(self) :
        return self.asset_id

class Barcode(models.Model):
    asset_id=models.CharField(max_length=20,unique=True,null=False)
    barcode_id=models.CharField(max_length=20,unique=True,default=None)

    class Meta:
        db_table = 'barcode'

    def __str__(self) :
        return self.barcode_id
    

