from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Service

class ServiceSerializer(ModelSerializer):
    class Meta:
        model=Service
        depth=1
        fields='__all__'