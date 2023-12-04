from django.shortcuts import render
from django.http import JsonResponse
from .models import Employee
from django.core import serializers


# Create your views here.
def get_employees(request):
    employees = Employee.objects.all()
    data = serializers.serialize('json', employees)
    return JsonResponse(status=200, data=data, safe=False)