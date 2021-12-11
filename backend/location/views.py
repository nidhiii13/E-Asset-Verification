from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.serializers import Serializer

from .serializers import LocationSerializer
from .models import Location, UserModel
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
def add_location(request):
    try:
        incharge_id=UserModel.objects.get(SSN=request.data.get('incharge'))
    except:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)

    request.data['incharge']=incharge_id.id
    serializer=LocationSerializer(data=request.data)
    if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
