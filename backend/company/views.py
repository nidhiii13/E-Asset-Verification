from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import CompanySerializer
from .models import Company
# Create your views here.

class CompanyViewset(viewsets.ModelViewSet):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer
