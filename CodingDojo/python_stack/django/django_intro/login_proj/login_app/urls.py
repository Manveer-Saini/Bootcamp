from django.urls import path
from . import views

urlpatterns = [
    path('', views.log_and_reg),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('success', views.index)
]

