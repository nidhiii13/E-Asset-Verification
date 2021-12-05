from django.urls import path,include
from .views import hello, login
urlpatterns = [
    path('user',hello),
    path('login',login)
]