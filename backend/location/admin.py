from django.contrib import admin
from location.models import Service
from location.models import Location
# Register your models here.

admin.site.register(Location)
admin.site.register(Service)