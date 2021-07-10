from django.urls import path
from . import views

urlpatterns = [
    path('', views.indexBook),
    path('createBook', views.createBook),
    path('books/<int:my_val>', views.viewBook),

]