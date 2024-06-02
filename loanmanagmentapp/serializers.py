from rest_framework import serializers
from loanmanagmentapp.models import Loanapplication
from loanmanagmentapp.models import LoginInput
class LoanapplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loanapplication
        fields = '__all__'

  

class LoginInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginInput
        fields = ('username', 'password')