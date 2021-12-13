from rest_framework.serializers import ModelSerializer
from .models import Asset

class AssetSerializer(ModelSerializer):
    class Meta:
        model=Asset
        fields=('asset_id','cost_center','asset_description','capitalized_date',)