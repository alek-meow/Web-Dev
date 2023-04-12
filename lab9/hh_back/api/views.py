import json

from django.http import JsonResponse

from api.models import *


# Create your views here.


def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_description = data.get('description', '')
        company_city = data.get('city', '')
        company_address = data.get('address', '')
        company = Company.objects.create(name=company_name, description=company_description, city=company_city,
                                         address=company_address)
        return JsonResponse(company.to_json())


def company_vacancies(request, company_id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().filter(id=company_id)
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)


def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_description = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vacancy_company = data.get('company', '')
        vacancy = Vacancy.objects.create(name=vacancy_name, description=vacancy_description, salary=vacancy_salary,
                                         company=vacancy_company)
        return JsonResponse(vacancy.to_json())


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    if request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def top_ten(request):
    vacancies = Vacancy.objects.all().raw('SELECT * FROM api_vacancy ORDER BY salary DESC LIMIT 10')
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})
