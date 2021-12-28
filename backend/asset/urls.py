from django.urls import path
from .views import asset_company_loc, barcode_generate, edit_report, found_status_update, verification_process_found, verification_process_notfound
urlpatterns = [
    path('barcode',barcode_generate),
    path('updatestatus',found_status_update),
    path('company/loc',asset_company_loc),
    path('verification/found',verification_process_found),
    path('verification/notfound',verification_process_notfound),
    path('report/edit/<str:pk>',edit_report)

]