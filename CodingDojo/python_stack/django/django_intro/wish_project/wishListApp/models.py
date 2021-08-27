import re
from django.contrib.messages.api import error
from django.db import models


class UserManager(models.Manager):
    def reg_validator(self, postData):
        errors = {}
        users = User.objects.filter(email = postData['email'])
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if(len(postData['firstName']) < 2):
            errors['firstName'] = "First name should be atleast 2 characters"
        if(len(postData['lastName']) < 2):
            errors['lastName'] = "Last name should be atleast 2 characters"
        if(len(postData['password']) < 8):
            errors['password'] = "Password should be atleast 8 characters"
        if(postData['passwordConfirm'] != postData['password']):
            errors['passwordConfirm'] = "The password must match the password confirmation"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = ("Invalid email address!")
        if users:
            errors['existingUser'] = "User with that email already exists"
        return errors

    def login_validator(self, postData):
        errors = {}
        users = User.objects.filter(email = postData['email'])
        if not users:
            errors['existing_user'] = "Account with email does not exist"
        if (len(postData['password']) < 8):
            errors['password'] = "Password requires at least 8 characters"
        return errors


class WishManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if (len(postData['item']) < 3):
            errors['item'] = "Item needs to be atleast 3 characters!"
        if (len(postData['description']) < 3):
            errors['description'] = "Description needs to be atleast 3 characters!"
        return errors
    

class User(models.Model):
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    passwordHash = models.CharField(max_length=255)
    objects = UserManager()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
# Create your models here.

class Wish(models.Model):
    item = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey(User, related_name="wishes", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = WishManager()

class GrantedWish(models.Model):
    isGranted = models.BooleanField()
    wish = models.OneToOneField(Wish, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)