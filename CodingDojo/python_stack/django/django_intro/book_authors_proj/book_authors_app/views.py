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

def indexAuthor(request):
    if request.method == "POST":
        Author.objects.create(firstName = request.POST['firstName'], lastName = request.POST['lastName'], notes = request.POST['notes'])
        return redirect('/authors')
    if request.method == "GET":
        context = {
            'allAuthors' : Author.objects.all(),
        }
        return render(request, "authors.html", context)

def viewAuthor(request, my_val):
    if request.method == "POST":
        Author.objects.get(id=my_val).book.add(Book.objects.get(id=request.POST['book']))
        return redirect(f"/authors/{my_val}")
        
    if request.method == "GET":
        context = {
            "theAuthor" : Author.objects.get(id=my_val),
            "books" : Author.objects.get(id=my_val).book.all(),
            "allBooks" : Book.objects.all()
        }
        return render(request, "authorInfo.html", context)
