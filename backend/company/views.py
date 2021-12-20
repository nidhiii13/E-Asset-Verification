from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import CompanySerializer
from .models import Company
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
# Create your views here.

class CompanyViewset(viewsets.ModelViewSet):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer

@csrf_exempt
@api_view(["PUT"])
def edit_company(request,pk):
    query = Company.objects.get(company_id=pk)
    serializer=CompanySerializer(query,data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'msg':'fail'})
    return Response(serializer.data)
