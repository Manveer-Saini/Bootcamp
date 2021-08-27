from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
# from watch_party_proj.api import serializers
from .models import Room

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
# Create your views here.
