from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from loanmanagmentapp.serializers import LoanapplicationSerializer
from loanmanagmentapp.models import Loanapplication
from rest_framework import generics
from .models import LoginInput
from .serializers import LoginInputSerializer
from django.http import HttpResponse
from django.views.decorators.http import require_POST
from django.views.decorators.http import require_POST
from django.shortcuts import render
# views.py
@csrf_exempt
@require_POST
def logininput(request):
    return HttpResponse("Login input received!")


@require_POST
@csrf_exempt
def loanapplication(request):
    if request.method == 'POST':
        # Handle the form submission
        return HttpResponse('Form submitted successfully!')
    else:
        # Display the form
        return render(request, 'loanapplication')

   
   


  