from django.urls import path
from . import views

urlpatterns = [
    path('random_word', views.display),
    path('update', views.update),
    path('random_word/reset', views.reset),
]
