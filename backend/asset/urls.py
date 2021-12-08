from django.urls import path
from .views import barcode_generate
urlpatterns = [
    path('barcode',barcode_generate)
]