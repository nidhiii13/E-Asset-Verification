from django.db import models

# Create your models here.
class Company(models.Model):
    company_id=models.TextField(max_length=20,default=None)
    company_name=models.TextField(max_length=20)
    location=models.TextField()
    email_id=models.EmailField()
    enquiry_no=models.CharField(max_length=10)

    class Meta:
        db_table='company'