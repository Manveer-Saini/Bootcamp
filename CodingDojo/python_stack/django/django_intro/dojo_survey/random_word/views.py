from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

def display(request):
    # initialization condition
    if 'counter' not in request.session:
        request.session['counter'] = 0
        request.session["random_word"] = get_random_string(length=14)

    context = {
        "random_word" : request.session["random_word"],
        "counter" : request.session["counter"]
    }
    return render(request, "form.html", context)

def update(request):
    request.session["random_word"] = get_random_string(length=14)
    request.session["counter"] += 1
    return redirect("/app_two/random_word")


def reset(request):
    request.session.flush()
    return redirect("/app_two/random_word")


# Create your views here.
