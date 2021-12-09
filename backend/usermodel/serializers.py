from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from .models import UserModel

class UserModelSerializer(ModelSerializer):
    class Meta:
        model=UserModel
        fields='__all__'