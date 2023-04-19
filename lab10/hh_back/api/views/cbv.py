from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import *
from api.serializers import *


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer2(instance)
        return Response(serializer.data)

    def put(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer2(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})


class CompanyVacanciesAPIView(APIView):
    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
            return company.vacancies.all()
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id):
        instance = self.get_object(id)
        serializer = VacancySerializer2(instance, many=True)
        return Response(serializer.data)