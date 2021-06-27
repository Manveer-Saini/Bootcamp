from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def create(request):
    context = {}
    if request.method == "POST":
        context["first_name"] = request.POST["first_name"]
        context["dojo_location"] = request.POST["dojo_location"]
        context["favorite_language"] = request.POST["favorite_language"]
        context["comment"] = request.POST["comment"]
    return render(request, "results.html", context)

# Create your views here.
