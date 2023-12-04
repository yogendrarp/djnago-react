from django.urls import path
from django.views.generic.base import TemplateView
from . import views

urlpatterns = [
  # other patterns here
  path('hello-webpack/', TemplateView.as_view(template_name='employee/hello_webpack.html')),
  path('employees/', views.get_employees)
]
