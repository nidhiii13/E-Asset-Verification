from django.shortcuts import render
from rest_framework import viewsets

from .models import UserModel
from .serializers import UserModelSerializer
# Create your views here.

class UserModelView(viewsets.ModelViewSet):
    queryset=UserModel.objects.all()
    serializer_class=UserModelSerializer