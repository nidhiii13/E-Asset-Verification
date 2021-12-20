from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Location

class LocationSerializer(ModelSerializer):
    class Meta:
        model=Location
        depth = 1
        fields='__all__'