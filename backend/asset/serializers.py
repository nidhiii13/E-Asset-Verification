from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Asset,SAP_Asset
from rest_framework import serializers

class AssetSerializer(ModelSerializer):
    capitalized_date=serializers.DateField()
    class Meta:
        model=Asset
        fields='__all__'

class SAP_AssetSerializer(ModelSerializer):
    capitalized_date=serializers.DateField()
    class Meta:
        model=SAP_Asset
        fields='__all__' 