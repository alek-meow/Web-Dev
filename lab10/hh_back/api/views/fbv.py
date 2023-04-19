from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import *
from api.serializers import CompanySerializer1, VacancySerializer1


# Create your views here.

@api_view(['GET', 'POST'])
@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = CompanySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer1(company, many=False)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = CompanySerializer1(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})


@api_view(['GET', 'POST'])
@csrf_exempt
def vacancies(request):
    if request.method == 'GET':
        companies = Vacancy.objects.all()
        serializer = VacancySerializer1(companies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = VacancySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def company_vacancies(request, id):
    if request.method == 'GET':
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.all().filter(id=company.id)
        serializer = CompanySerializer1(vacancies, many=False)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = VacancySerializer1(vacancy, many=False)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = VacancySerializer1(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        vacancy.delete()
        return Response({'deleted': True})


def top_ten(request):
    vacancies = Vacancy.objects.all().raw('SELECT * FROM api_vacancy ORDER BY salary DESC LIMIT 10')
    serializer = VacancySerializer1(vacancies, many=True)
    return Response(serializer.data)


