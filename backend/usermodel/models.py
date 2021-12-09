from django.db import models
from django.db.models.deletion import CASCADE
from accounts.models import User
# Create your models here.
class UserModel(models.Model):
    username=models.ForeignKey(User,on_delete=models.CASCADE)
    SSN=models.CharField(max_length=20,unique=True)
    email_id=models.EmailField()
    contact_no=models.CharField(max_length=10)
    

    class Meta:
        db_table='usermodel'

    def __str__(self) :
        return str(self.username)

