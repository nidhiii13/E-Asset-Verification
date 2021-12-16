from django.urls import path
from .views import asset_company_loc, barcode_generate, found_status_update
urlpatterns = [
    path('barcode',barcode_generate),
    path('updatestatus',found_status_update),
    path('asset/company/loc',asset_company_loc)

]