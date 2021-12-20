from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Asset,SAP_Asset
from rest_framework import serializers

class AssetSerializer(ModelSerializer):
    capitalized_date=serializers.DateField()
    class Meta:
        model=Asset
        depth = 2
        fields=('asset_id','capitalized_date','cost_center','asset_description','barcode_id','room_no','company_id')

class SAP_AssetSerializer(ModelSerializer):
    capitalized_date=serializers.DateField()
    class Meta:
        model=SAP_Asset
        fields='__all__' 
        