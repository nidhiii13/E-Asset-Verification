from django.urls import path,include
from rest_framework.routers import DefaultRouter

from .views import UserModelView
 
router = DefaultRouter()
router.register('usermodel', UserModelView, basename='usermodel')

urlpatterns=[
    path('', include(router.urls))
]