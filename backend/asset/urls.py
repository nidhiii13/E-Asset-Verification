from django.urls import path
from .views import barcode_generate, found_status_update
urlpatterns = [
    path('barcode',barcode_generate),
    path('updatestatus',found_status_update)
]