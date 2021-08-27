import re
from django.shortcuts import render, redirect
from .models import GrantedWish, Wish, User
from django.contrib import messages
import bcrypt


def log_and_reg(request):
    if 'userId' in request.session:
        return redirect('/wishes')
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
        return redirect("/")


def login(request):
    errors = User.objects.login_validator(request.POST)
    user = User.objects.filter(email=request.POST['email'])

    if user:
        loggedUser = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), loggedUser.passwordHash.encode()):
            request.session['userId'] = loggedUser.id
            # messages.success(request, "Successfully logged in")
            return redirect('/wishes')
        else:
            messages.error(request, "Invalid password!")
    else:
        messages.error(request, "Account with email does not exist")
    return redirect('/')

def viewWishes(request):
    context = {
        "theUser" : User.objects.get(id=request.session['userId']),
        "allUsers" : User.objects.all(),
        "allWishes" : Wish.objects.all(),

    }
    return render(request, "wishes.html", context)

def wishForm(request):
    context = {
        "theUser" : User.objects.get(id=request.session['userId']),
    }
    return render(request, "wishForm.html", context)

def createWishes(request):
    errors = Wish.objects.validator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/wishes')
    else:
        theUser = User.objects.get(id=request.session['userId'])
        theWish = Wish.objects.create(item = request.POST['item'], description = request.POST['description'], user = theUser)
        GrantedWish.objects.create(isGranted = False, wish = theWish)
        return redirect('/wishes')


def deleteWish(request, wishId):
    userWish = Wish.objects.get(id=wishId)
    userWish.delete()
    return redirect('/wishes')    

def editForm(request, wishId):
    context = {
        'theUser' : User.objects.get(id=request.session['userId']),
        'theWish' : Wish.objects.get(id=wishId)
    }
    return render(request, "editWish.html", context)

def update(request, wishId):
    errors = Wish.objects.validator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect(f'/wishes/edit/{wishId}')
    else:
        theWish = Wish.objects.get(id=wishId)
        theWish.item = request.POST['item']
        theWish.description = request.POST['description']
        theWish.save()
        return redirect('/wishes')

# def index(request):
#     context = {
#         'theUser': User.objects.get(id=request.session['userId'])
#     }
#     return render(request, "index.html", context)
# # Create your views here.

def grantWish(request, wishId):
    theWish = Wish.objects.get(id=wishId)
    grantTheWish = GrantedWish.objects.get(id=theWish.grantedwish.id)
    grantTheWish.isGranted = True
    grantTheWish.save()
    return redirect('/wishes')

def logout(request):
    request.session.flush()
    return redirect("/")
