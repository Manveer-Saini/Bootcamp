from django.shortcuts import redirect, render
from .models import Users


def create(request):
    someUser = Users.objects.create(first_name=request.POST["first_name"], last_name=request.POST["last_name"],
                                    email_address=request.POST["email_address"], age=request.POST["age"])

    return redirect("/results")
# Create your views here.


def display(request):
    context = {
        "all_users" : Users.objects.all()
    }
    return render(request, "results.html", context)
