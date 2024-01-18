from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import User
from rest_framework import generics
from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import UserSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
