from django.db import models
from datetime import datetime
from django.utils.formats import get_format

# Create your models here.


class MyMail(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(auto_now_add=True)




