from django.urls import path
from . import views

urlpatterns = [
    path('', views.log_and_reg),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('success', views.index),
    path('wall', views.viewWall),
    path('messages', views.makeMessages),
    path('messages/<int:messageId>/comments', views.makeComments),
    path('messages/<int:messageId>/delete', views.deleteMessage),
    path('messages/<int:messageId>/edit', views.editForm),
    path('messages/<int:messageId>/update', views.update),
]

