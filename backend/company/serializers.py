from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Company

class CompanySerializer(ModelSerializer):
    class Meta:
        model=Company
        fields='__all__'