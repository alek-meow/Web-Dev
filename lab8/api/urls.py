from django.contrib import admin
from django.urls import path, include

from api.views import *

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:category_id>', category_detail),
    path('categories/<int:category_id>/products/', category_product_list)
]