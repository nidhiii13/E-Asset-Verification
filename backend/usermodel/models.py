from django.db import models
from django.db.models.deletion import CASCADE
from location.models import Location
from asset.models import Asset
from accounts.models import User
# Create your models here.
class UserModel(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    SSN=models.CharField(max_length=20,unique=True)
    email_id=models.EmailField()
    contact_no=models.CharField(max_length=10)
    room_no=models.ForeignKey(Location,on_delete=models.CASCADE,max_length=20)
    asset_id=models.ForeignKey(Asset,on_delete=models.CASCADE,max_length=20)


    class Meta:
        db_table='usermodel'

class Access(models.Model):
    asset_id=models.ForeignKey(Asset,max_length=20,on_delete=models.CASCADE)
    User_ssn=models.ForeignKey(UserModel,max_length=20,on_delete=models.CASCADE)

    class Meta:
        db_table='accessed_by'