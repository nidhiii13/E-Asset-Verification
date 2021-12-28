from django.urls import path,include
from .views import contact_us, hello, login
urlpatterns = [
    path('user',hello),
    path('login',login),
    path('contact',contact_us)
]