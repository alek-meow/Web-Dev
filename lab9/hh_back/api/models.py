from django.db import models

# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=200, default='')
    description = models.TextField(default='')
    city = models.CharField(max_length=200, default='')
    address = models.TextField(default='')

    def __str__(self):
        return f'{self.id}) {self.name}\n{self.description}\n{self.city}, {self.address}'

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=200, default='')
    description = models.TextField(default='')
    salary = models.FloatField(default='0')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    def __str__(self):
        return f'{self.id}) {self.name}\n{self.description}\nSalary: {self.salary}\n{self.company}'

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name
        }