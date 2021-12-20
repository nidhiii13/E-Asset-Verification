from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewset, edit_company

router=DefaultRouter()
router.register('add',CompanyViewset,basename='add')

urlpatterns=[
    path('',include(router.urls)),
    path('edit/<str:pk>',edit_company)
]