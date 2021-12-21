from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.serializers import Serializer
from .serializers import LocationSerializer
from .models import Location, UserModel
from rest_framework.response import Response
from rest_framework import serializers

from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
# Create your views here.
@csrf_exempt
@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_location(request):
    req=request.data
    print(req['name'])
    try:
        incharge= UserModel.objects.get(SSN=req.get('incharge'))
        object= Location.objects.create(name=req['name'],room_no=req['room_no'],list_assets=req['list_assets'],incharge=incharge)
    except:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    return Response({'msg':'success'})

    

@csrf_exempt
@api_view(["PUT"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def edit_location(request,pk):
    query = Location.objects.get(room_no=pk)
    try:
        incharge_id=UserModel.objects.get(SSN=request.data.get('incharge'))
    except:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)

    request.data['incharge']=incharge_id.id
    serializer=LocationSerializer(query,data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response({'msg':'fail'})
    return Response(serializer.data)

@csrf_exempt
@api_view(["GET"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_location(request):
    query = Location.objects.all()
    serializer=LocationSerializer(query,many=True)
    return Response(serializer.data)
    
@csrf_exempt
@api_view(["DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def delete_location(request,pk):
    query = Location.objects.get(room_no=pk)
    if query:
        query.delete()
        return Response({"status":"ok"}, status=HTTP_200_OK)
    return Response(serializers.errors, status=HTTP_400_BAD_REQUEST)