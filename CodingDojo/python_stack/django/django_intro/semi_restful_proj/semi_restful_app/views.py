# from re import M
# import re
from django.shortcuts import render, redirect
from .models import Show


def index(request):
    return render(request, "add_show.html")


def createShow(request):
    if request.method == "POST":
        Show.objects.create(title=request.POST['title'],
                            network=request.POST['network'],
                            releaseDate=request.POST['release_date'],
                            description=request.POST['description'])
        return redirect(f'/shows/{Show.objects.last().id}')


def viewShow(request, my_val):
    if request.method == "GET":
        context = {
            "theShow": Show.objects.get(id=my_val)
        }
        return render(request, "view_show.html", context)
# Create your views here.


def viewAll(request):
    if request.method == "GET":
        context = {
            "allShows": Show.objects.all()
        }
        return render(request, "view_all_shows.html", context)


def editShow(request, my_val):
    if request.method == "GET":
        release_date = Show.objects.get(
            id=my_val).releaseDate.strftime("%Y-%m-%d")
        context = {
            "release_date": release_date,
            "theShow": Show.objects.get(id=my_val)
        }
        return render(request, "show_edit.html", context)


def updateShow(request, my_val):
    if request.method == "POST":
        updateObj = Show.objects.get(id=my_val)
        updateObj.title = request.POST['title']
        updateObj.network = request.POST['network']
        updateObj.releaseDate = request.POST['release_date']
        updateObj.description = request.POST['description']
        updateObj.save()
        return redirect(f'/shows/{my_val}')


def deleteShow(request, my_val):
    deleteObj = Show.objects.get(id=my_val)
    deleteObj.delete()
    return redirect('/shows')
