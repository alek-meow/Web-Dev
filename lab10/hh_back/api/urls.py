from django.contrib import admin
from django.urls import path, include

from api.views import fbv, cbv

urlpatterns = [
    path('companies/', fbv.companies_list),
    path('companies/<int:id>/', fbv.company_detail),
    path('companies/<int:id>/vacancies/', cbv.CompanyVacanciesAPIView.as_view()),
    path('vacancies/', cbv.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', cbv.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', fbv.top_ten),
]
