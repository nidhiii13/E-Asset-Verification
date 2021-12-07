from django.contrib import admin
from usermodel.models import Access

from usermodel.models import UserModel

# Register your models here.
admin.site.register(UserModel)
admin.site.register(Access)