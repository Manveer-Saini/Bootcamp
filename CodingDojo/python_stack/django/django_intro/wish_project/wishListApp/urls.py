from django.urls import path
from . import views

urlpatterns = [
    path('', views.log_and_reg),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    # path('success', views.index),
    path('wishes', views.viewWishes),
    path('wishes/new', views.wishForm),
    path('createWish', views.createWishes),
    path('wishes/delete/<int:wishId>', views.deleteWish),
    path('wishes/edit/<int:wishId>', views.editForm),
    path('wishes/update/<int:wishId>', views.update),
    path('wishes/granted/<int:wishId>', views.grantWish)
]

