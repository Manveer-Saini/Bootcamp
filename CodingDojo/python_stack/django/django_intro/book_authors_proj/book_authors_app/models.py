from django.db import models
from django.db.models.fields import CharField
class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Author(models.Model):
    firstName = models.CharField(max_length=45)
    lastName = models.CharField(max_length=45)
    notes = models.TextField(default="nothing")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    book = models.ManyToManyField(Book, related_name="authors")

# Create your models here.
