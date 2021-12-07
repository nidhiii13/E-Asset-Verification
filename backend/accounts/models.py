
from django.db import models
from django.db.models.deletion import CASCADE
from location.models import Location
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    is_admin=models.BooleanField('Is Admin',default=True)
    is_assistant=models.BooleanField('Is Assistant',default=False)
    is_verifier=models.BooleanField('Is Verifier',default=False)

    