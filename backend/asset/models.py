from django.db import models
from django.db.models.deletion import CASCADE
from location.models import Location
from company.models import Company


# Create your models here.
class Asset(models.Model):
    asset_id=models.CharField(max_length=20,unique=True,null=False)
    barcode_id=models.CharField(max_length=20,unique=True)
    cost_center=models.CharField(max_length=20)
    asset_description=models.TextField()
    capitalized_date=models.DateField(default=None)
    found_status=models.BooleanField(default=False)
    company_id=models.ForeignKey(Company,max_length=20,on_delete=models.CASCADE)
    room_no=models.ForeignKey(Location,on_delete=models.CASCADE,default=None)

    class Meta:
        db_table='asset'
    
    def __str__(self) :
        return self.asset_id

