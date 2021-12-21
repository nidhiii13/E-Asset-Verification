from django.urls import path
from .views import add_service, edit_service,get_service,delete_service

urlpatterns=[
    path('addservice',add_service),
    path('getservice',get_service),
    path('editservice/<str:pk>',edit_service),
    path('deleteservice/<str:pk>',delete_service)
    ]