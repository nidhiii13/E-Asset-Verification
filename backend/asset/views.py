from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
from .serializers import AssetSerializer, SAP_AssetSerializer
from .models import Asset
import barcode
from barcode import EAN13
# Create your views here.

@csrf_exempt
@api_view(["POST"])
def barcode_generate(request):
    a=[]
    json=request.data
    number='1234567890124'
    code=EAN13(number)
    for i in json:

        date=i['capitalized_date']
        l=date.split('/')
        l.reverse()
        l[0]='20'+l[0]
        if len(str(l[1]))==1:
            l[1]='0'+l[1]
        if len(str(l[2]))==1:
            l[2]='0'+l[2]
        s='-'
        s=s.join(l)
        print(s)
        i['capitalized_date']=s
        serializer=SAP_AssetSerializer(data=i)
        if serializer.is_valid():
            serializer.save()
            #return Response({'msg1':'success'})
        else:
            return Response({'msg1':'fail'})

        name=i['asset_id']
        code.save(r'C:\\Users\\nidhi\\Downloads\\barcode'+name)

    return Response({'msg2':'success'})
        

@csrf_exempt
@api_view(["POST"])
def found_status_update(request):
    barcode_no=request.data.get('barcode_id')
    query=Asset.objects.get(barcode_id=barcode_no)
    query.found_status=True
    query.save()

    return Response({'msg':'success'})