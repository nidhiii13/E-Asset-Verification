import imp
import re
from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
from asset.models import Asset
from .serializers import ServiceSerializer
from .models import Service
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework import serializers
import pandas as pd
import pickle
model=pickle.load(open('ML-Model/ServicePrediction.pkl','rb+'))
# Create your views here.
@csrf_exempt
@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_service(request):
    try:
        asset_id=Asset.objects.get(asset_id=request.data.get('asset_id'))
    except:
        return Response(serializers.errors, status=HTTP_400_BAD_REQUEST)

    request.data['asset_id']=asset_id.id
    serializer=ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializers.errors, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_service(request):
    service=Service.objects.all()
    serializer=ServiceSerializer(service,many=True)
    return Response(serializer.data)


@csrf_exempt
@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def edit_service(request,pk):
    query=Asset.objects.get(asset_id=pk)
    try:
        query=Asset.objects.get(asset_id=pk)
        service=Service.objects.get(asset_id=query.id)
    except:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    request.data['asset_id']=query.id
    serializer = ServiceSerializer(service,data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializers.errors, status=HTTP_400_BAD_REQUEST)
    return Response({'msg':'success'})

@csrf_exempt
@api_view(["DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_service(request,pk):
    asset = Asset.objects.get(asset_id=pk)
    query = Service.objects.get(asset_id=asset.id)
    if query:
        query.delete()
        return Response({"status":"ok"}, status=HTTP_200_OK)
    return Response(serializers.errors, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(["POST"])
def predict_service(request):
    product = request.data.get('product')
    company = request.data.get('company')
    years = request.data.get('years')
    
    dataset = pd.read_csv('ML-Model/Dataset-e.csv')
    dataset=dataset.drop(['Capitalized date'],axis=1)
    X= dataset.drop(['Service count'],axis=1)

    df = pd.DataFrame([[product,company,years]],columns=X.columns)
    prediction = model.predict(df)
    return Response({'prediction':prediction})
    