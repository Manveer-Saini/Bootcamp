import re
from django.shortcuts import render, redirect
from .models import Comment, Message, MessageManager, User
from django.contrib import messages
import bcrypt


def log_and_reg(request):
    if 'userId' in request.session:
        return redirect('/wall')
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
            return redirect('/wall')
        else:
            messages.error(request, "Invalid password!")
    else:
        messages.error(request, "Account with email does not exist")
    return redirect('/')

def viewWall(request):
    context = {
        "theUser" : User.objects.get(id=request.session['userId']),
        "allUsers" : User.objects.all(),
        "allMessages" : Message.objects.all(),
    }
    return render(request, "wall.html", context)

def makeMessages(request):
    errors = Message.objects.validator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/wall')
    else:
        theUser = User.objects.get(id=request.session['userId'])
        theMessage = Message.objects.create(message = request.POST['message_box'], user = theUser)
        return redirect('/wall')

def makeComments(request, messageId):
    errors = Comment.objects.validator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/wall')
    else:
        theUser = User.objects.get(id=request.session['userId'])
        theMessage = Message.objects.get(id=messageId)
        theComment = Comment.objects.create(comment = request.POST['comment'], user = theUser, message = theMessage)
        return redirect('/wall')

def deleteMessage(request, messageId):
    userMessage = Message.objects.get(id=messageId)
    userMessage.delete()
    return redirect('/wall')    

def editForm(request, messageId):
    context = {
        'theMessage' : Message.objects.get(id=messageId)
    }
    return render(request, "editMessage.html", context)

def update(request, messageId):
    errors = Message.objects.validator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect(f'/messages/{messageId}/editForm')
    else:
        theMessage = Message.objects.get(id=messageId)
        theMessage.message = request.POST['message_box']
        theMessage.created_at = theMessage.updated_at
        theMessage.save()
        return redirect('/wall')

def index(request):
    context = {
        'theUser': User.objects.get(id=request.session['userId'])
    }
    return render(request, "index.html", context)
# Create your views here.


def logout(request):
    request.session.flush()
    return redirect("/")
