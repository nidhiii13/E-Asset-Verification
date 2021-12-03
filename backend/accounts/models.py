from django.db import models

# Create your models here.
class UserModel(models.Model):
    name=models.CharField(max_length=20)
    about=models.TextField()

    class Meta:
        db_table='user'
    def __str__(self):
        return self.name