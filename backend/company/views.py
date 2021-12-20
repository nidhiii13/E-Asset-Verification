from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import CompanySerializer
from .models import Company
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework import status
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

@csrf_exempt
@api_view(["DELETE"])
def delete_company(request,pk):
    query = Company.objects.get(company_id=pk)
    if query:
        query.delete()
        return Response({"status":"ok"}, status=status.HTTP_200_OK)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)