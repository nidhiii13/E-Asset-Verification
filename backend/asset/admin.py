from django.contrib import admin

from .models import Asset,SAP_Asset

# Register your models here.
admin.site.register(Asset)
admin.site.register(SAP_Asset)