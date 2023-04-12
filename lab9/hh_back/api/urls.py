from django.contrib import admin
from django.urls import path, include

from api.views import *

urlpatterns = [
    path('companies', companies_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten),
]