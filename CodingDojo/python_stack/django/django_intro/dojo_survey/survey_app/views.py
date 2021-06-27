from django.shortcuts import redirect, render

def index(request):
    return render(request, "index.html")

def create(request):
    request.session['first_name'] = request.POST["first_name"]
    request.session["dojo_location"] = request.POST["dojo_location"]
    request.session["favorite_language"] = request.POST["favorite_language"]
    request.session["comment"] = request.POST["comment"]
    return redirect("/results")

def create_results(request):
    context = {
        "first_name" : request.session['first_name'],
        "dojo_location" : request.session['dojo_location'],
        "favorite_language" : request.session['favorite_language'],
        "comment" : request.session['comment']
    }
    return render(request, "results.html", context)

# Create your views here.
