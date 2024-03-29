from django.db import models


# Create your models here.


class Product(models.Model):
    category_id = models.IntegerField(default=1)
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def to_json(self):
        return{
            'id': self.id,
            'category_id': self.category_id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }


class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }
