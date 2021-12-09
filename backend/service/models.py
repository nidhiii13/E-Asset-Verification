from django.db import models
from asset.models import Asset

# Create your models here.
class Service(models.Model):
    status=models.BooleanField(default=False)
    remarks=models.TextField()
    service_count=models.IntegerField()
    asset_id=models.ForeignKey(Asset,max_length=20,on_delete=models.CASCADE)

    class Meta:
        db_table='service'
    
    def __str__(self) :
        return str(self.asset_id)