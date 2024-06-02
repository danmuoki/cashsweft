from django.db import models


class LoginInput(models.Model):
    username =models.CharField(max_length=255)
    password =models.CharField(max_length=255)


class Loanapplication(models.Model):
    
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    social_security_number = models.CharField(max_length=11)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    identification_type = models.CharField(max_length=50)
    identification_number = models.CharField(max_length=50)

# Create your models here.
