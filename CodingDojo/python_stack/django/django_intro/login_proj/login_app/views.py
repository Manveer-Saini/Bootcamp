from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt


def log_and_reg(request):
    return render(request, "login_reg_form.html")


def register(request):
    errors = User.objects.reg_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        # Redirect back to the login and registration form to try again.
        return redirect("/")
    else:
        password = request.POST['password']
        pwHash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

        User.objects.create(
            firstName=request.POST['firstName'], lastName=request.POST['lastName'], email=request.POST['email'], passwordHash=pwHash)
        messages.success(request, "Successfully created account")
        return redirect("/success")


def login(request):
    errors = User.objects.login_validator(request.POST)
    user = User.objects.filter(email=request.POST['email'])

    if user:
        loggedUser = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), loggedUser.passwordHash.encode()):
            request.session['userId'] = loggedUser.id
            messages.success(request, "Successfully logged in")
            return redirect('/success')
        else:
            messages.error(request, "Invalid password!")
    else:
        messages.error(request, "Account with email does not exist")
        return redirect('/')


def index(request):
    context = {
        'theUser': User.objects.get(id=request.session['userId'])
    }
    return render(request, "index.html", context)
# Create your views here.


def logout(request):
    request.session.flush()
    return redirect("/")
