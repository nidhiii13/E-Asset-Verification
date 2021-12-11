from django.urls import path
from .views import add_location
urlpatterns=[
    path('addloc',add_location)
    ]