from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
import barcode
from barcode import EAN13
# Create your views here.

@csrf_exempt
@api_view(["POST"])
@permission_classes((IsAuthenticated,))
def barcode_generate(request):
    a=[]
    json=request.data
    number='1234567890124'
    code=EAN13(number)
    for i in json:
        name=i['Asset']
        code.save(r'C:\\Users\\nidhi\\Downloads\\barcode'+name)

    return Response({'msg':'success'})
        

