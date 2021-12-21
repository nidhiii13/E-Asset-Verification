from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Company

class CompanySerializer(ModelSerializer):
    class Meta:
        model=Company
        fields=('company_id','company_name','location','email_id','enquiry_no')

class CompanyListSerializer(ModelSerializer):
    class Meta:
        model=Company
        fields ='__all__'