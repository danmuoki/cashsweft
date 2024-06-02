from django.urls import path
from loanmanagmentapp import views  # Make sure to import the views module

urlpatterns = [
    path('logininput/', views.logininput, name='logininput'),
    path('loanapplication/', views.loanapplication, name='loanapplication-list'),
    path('loanapplication/<int:id>/', views.Loanapplication, name='loanapplication-detail'),
    path('loanapplication/', views.loanapplication, name='loanapplication'),
]


