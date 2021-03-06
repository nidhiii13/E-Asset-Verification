from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Company(models.Model):
    company_id=models.TextField(max_length=20,default=None)
    company_name=models.TextField(max_length=20)
    location=models.TextField()
    email_id=models.EmailField()
    phone_regex = RegexValidator(regex=r'^[6-9]\d{9}$', message=" 10 digits allowed.")
    enquiry_no=models.CharField(validators=[phone_regex],max_length=10)
    list =models.IntegerField(default=None)

    class Meta:
        db_table='company'

    def __str__(self):
        return str(self.company_id)