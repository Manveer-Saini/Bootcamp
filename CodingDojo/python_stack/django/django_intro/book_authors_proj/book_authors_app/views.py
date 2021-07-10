import re
from django.shortcuts import render, redirect
from .models import Author, Book

# Create your views here.
def indexBook(request):
    context = {
        "allBooks" : Book.objects.all() 
    }
    return render(request, "books.html", context)

def createBook(request):
    Book.objects.create(title = request.POST['title'], desc = request.POST['desc'])
    return redirect("")

def viewBook(request, my_val):
    if request.method == "POST":
        Book.objects.get(id=my_val).authors.add(Author.objects.get(id=request.POST['author']))
        return redirect(f"/books/{my_val}")
        
    if request.method == "GET":
        context = {
            "theBook" : Book.objects.get(id=my_val),
            "authors" : Book.objects.get(id=my_val).authors.all(),
            "allAuthors" : Author.objects.all()
        }
        return render(request, "bookInfo.html", context)