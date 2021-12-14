from rest_framework.serializers import ModelSerializer
from .models import Asset
from rest_framework import serializers

class AssetSerializer(ModelSerializer):
    capitalized_date=serializers.DateField()
    class Meta:
        model=Asset
        fields=('asset_id','capitalized_date','cost_center','asset_description',)