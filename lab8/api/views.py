from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from api.models import Product, Category

# Create your views here.


def product_list(request):
    products_json = [p.to_json() for p in Product.objects.all()]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    products_json = [p.to_json() for p in Product.objects.all()]
    for product in products_json:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})


def category_list(request):
    categories_json = [c.to_json() for c in Category.objects.all()]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, category_id):
    categories_json = [c.to_json() for c in Category.objects.all()]
    for c in categories_json:
        if c['id'] == category_id:
            return JsonResponse(c)
    return JsonResponse({'error': 'Product not found'})


def category_product_list(request, category_id):
    products_json = [p.to_json() for p in Product.objects.all()]
    result = []
    for product in products_json:
        if product['category_id'] == category_id:
            result.append(product)
    return JsonResponse(result, safe=False)

