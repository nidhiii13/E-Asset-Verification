from django.urls import path
from .views import add_location, edit_location,get_location
urlpatterns=[
    path('addloc',add_location),
    path('getloc',get_location),
    path('editloc/<str:pk>',edit_location)
    ]