from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from django.views.decorators.csrf import csrf_exempt
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
# Create your views here.
@csrf_exempt
@api_view(["POST"])
@permission_classes((IsAuthenticated,))
def add_service(request):
    try:
        asset_id=Asset.objects.get(asset_id=request.data.get('asset_id'))
    except:
        return Response({'errotttr': "lol"})

    request.data['asset_id']=asset_id.id
    serializer=ServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({'error':'invalid'})

@csrf_exempt
@api_view(["GET"])
@permission_classes((IsAuthenticated,))
def get_service(request):
    service=Service.objects.all()
    serializer=ServiceSerializer(service,many=True)
    return Response(serializer.data)

