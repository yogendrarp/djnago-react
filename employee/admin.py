from django.contrib import admin
from . import models
# Register your models here.


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(models.Employee, EmployeeAdmin)