from rest_framework.fields import SerializerMethodField

from api.models import *
from rest_framework import serializers


class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(**validated_data)
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'description', 'city', 'address')


class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = SerializerMethodField()

    def get_company(self, obj):
        company = obj.company
        return CompanySerializer1(company).data

    def create(self, validated_data):
        company_data = validated_data.pop('company')
        company = Company.objects.create(**company_data)
        vacancy = Vacancy.objects.create(company=company, **validated_data)
        return vacancy

    def update(self, instance, validated_data):
        company_data = validated_data.pop('company')
        company = instance.company
        company.name = company_data['name']
        company.description = company_data['description']
        company.city = company_data['city']
        company.address = company_data['address']
        company.save()
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.save()
        return instance


class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"
