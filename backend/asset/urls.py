from django.urls import path
from .views import asset_company_loc, barcode_generate, found_status_update, verification_process
urlpatterns = [
    path('barcode',barcode_generate),
    path('updatestatus',found_status_update),
    path('company/loc',asset_company_loc),
    path('verification',verification_process)

]