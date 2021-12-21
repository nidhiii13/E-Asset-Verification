from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response

from company.models import Company
from location.models import Location
from .serializers import AssetSerializer, SAP_AssetSerializer
from .models import Asset, Barcode, SAP_Asset
import barcode
from barcode import EAN13
import string
import random
# Create your views here.

@csrf_exempt
@api_view(["POST"])
def barcode_generate(request):
    a=[]
    json=request.data
    
    for i in json:
        N = 13
        res = ''.join(random.choices(string.digits, k = N))
        number=str(res)
        code=EAN13(number)
        print(code)
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
        barcode=Barcode.objects.create(asset_id=name,barcode_id=str(code))
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

@csrf_exempt
@api_view(["POST"])
def asset_company_loc(request):
    asset = request.data.get('asset_id')
    company = request.data.get('company_id')
    location = request.data.get('location')
    barcode= Barcode.objects.get(asset_id=asset).barcode_id
    print(type(barcode))
    print(company)
    query = SAP_Asset.objects.get(asset_id=asset)
    company_id = Company.objects.get(company_id=company)
    room_no=Location.objects.get(room_no=location)
    print(company_id.id) 
    print(room_no.id)
    #return Response({ "msg":"hello"}) 
    try:
        entity= Asset.objects.create(asset_id=asset,barcode_id=barcode,cost_center=query.cost_center,asset_description=query.asset_description,capitalized_date=query.capitalized_date,found_status=False,company_id=company_id,room_no=room_no)
        return Response({'msg':'success'})

    except:
        return Response({'msg':'failure'}) 


@csrf_exempt
@api_view(["GET"])
def verification_process_found(request):
    query = Asset.objects.filter(found_status=True)
    serializer=AssetSerializer(instance=query,many=True)
    list = serializer.data
    for data in list:
        room = Location.objects.get(id=data['room_no'])
        data['room_no'] = room.room_no
        company = Company.objects.get(id=data['company_id'])
        data['company_id'] = company.company_id

    return Response(serializer.data)

@csrf_exempt
@api_view(["GET"])
def verification_process_notfound(request):
    query = Asset.objects.filter(found_status=False)
    serializer=AssetSerializer(instance=query,many=True)
    list = serializer.data
    for data in list:
        room = Location.objects.get(id=data['room_no'])
        data['room_no'] = room.room_no
        company = Company.objects.get(id=data['company_id'])
        data['company_id'] = company.company_id

    return Response(serializer.data)