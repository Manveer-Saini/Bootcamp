from django.urls import path
from . import views

urlpatterns = [
    path('shows/new', views.index),
    path('create', views.createShow),
    path('shows/<int:my_val>', views.viewShow),
    path('shows', views.viewAll),
    path('shows/<int:my_val>/edit', views.editShow),
    path('shows/<int:my_val>/update', views.updateShow),
    path('shows/<int:my_val>/destroy', views.deleteShow)
]