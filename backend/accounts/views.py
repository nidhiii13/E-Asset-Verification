from django.http.response import HttpResponse
from django.shortcuts import render
from .models import User
from django.db.models.query import QuerySet
from django.http import response
from django.http.response import JsonResponse
from rest_framework.authtoken.views import Token
from django.shortcuts import render
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from django.http import HttpResponse
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.core.mail import send_mail
# Create your views here.
def hello(request):
    return HttpResponse("hii")

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    type=request.data.get("type")
    if username is None or password is None:
        return Response({'error': 'username or password cant be none'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(request,username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    
    token, _ = Token.objects.get_or_create(user=user)
    if user.is_verifier and type=='verifier':
        return Response({'token': token.key,"type":type},
                    status=HTTP_200_OK)
    elif user.is_assistant and type=='assistant':
        return Response({'token': token.key,"type":type},
                    status=HTTP_200_OK)

@csrf_exempt
@api_view(["POST"])
def contact_us(request):
    name = request.data.get('name')
    email_id = request.data.get('email_id')
    phone = request.data.get('contact_no')
    message = request.data.get('query') +'\n\nPhone no : '+phone+ '\nEmail id : '+email_id
    send_mail('Query from '+name, 'Query : '+message, 'nidhinidhu1234@gmail.com', ['nidhihh.is19@rvce.edu.in'], fail_silently=False)
    return Response({'msg':'success'})