from django.urls import path
from . import views

urlpatterns = [
    path('results', views.display),
    path('usersProcess', views.create)
]
