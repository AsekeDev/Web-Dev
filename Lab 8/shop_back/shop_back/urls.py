from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/products/', views.product_list),
    path('api/products/<int:id>/', views.product_detail),

    path('api/categories/', views.category_list),
    path('api/categories/<int:id>/', views.category_detail),
    path('api/categories/<int:id>/products/', views.category_products),
]