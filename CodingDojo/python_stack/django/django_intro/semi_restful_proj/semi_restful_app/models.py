from functools import update_wrapper
from django.db import models


class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if(len(postData['title']) < 2):
            errors['title'] = "Title should be atleast 2 characters"
        if(len(postData['network']) < 3):
            errors['network'] = "Network should be atleast 3 characters"
        if(len(postData['description']) < 10):
            errors['description'] = "Description should be atleast 10 characters"
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    releaseDate = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

# Create your models here.
