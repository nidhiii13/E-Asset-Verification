from django.db import models
#from asset.models import Asset
from usermodel.models import UserModel

# Create your models here.
class Location(models.Model):
    name=models.TextField()
    room_no=models.CharField(max_length=20)
    list_assets=models.IntegerField(max_length=20)
    incharge=models.ForeignKey(UserModel,default=None,on_delete=models.CASCADE)

    class Meta:
        db_table='location'

    def __str__(self) :
        return self.room_no

