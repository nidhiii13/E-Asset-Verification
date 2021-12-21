from django.shortcuts import render
from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import CompanySerializer,CompanyListSerializer
from .models import Company
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, permission_classes,authentication_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework import status
# Create your views here.

class CompanyViewset(viewsets.ModelViewSet):
    queryset=Company.objects.all()
    serializer_class=CompanyListSerializer

@csrf_exempt
@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def edit_company(request,pk):
    query = Company.objects.get(company_id=pk)
    serializer=CompanyListSerializer(query,data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'msg':'fail'})
    return Response(serializer.data)

@csrf_exempt
@api_view(["DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_company(request,pk):
    query = Company.objects.get(company_id=pk)
    if query:
        query.delete()
        return Response({"status":"ok"}, status=status.HTTP_200_OK)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)