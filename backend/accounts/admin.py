from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# Register your models here.
#admin.site.register(User,UserAdmin)

class MyUserAdmin(UserAdmin):
    model = User

    fieldsets = UserAdmin.fieldsets + (
            (None, {'fields': ('is_admin','is_assistant','is_verifier')}),
    )

admin.site.register(User, MyUserAdmin)