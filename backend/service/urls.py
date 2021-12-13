from django.urls import path
from .views import add_service,get_service

urlpatterns=[
    path('addservice',add_service),
    path('getservice',get_service)
    ]