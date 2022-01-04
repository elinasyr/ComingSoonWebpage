from django.shortcuts import render

# Create your views here.
from .models import Action
def index(request):
    actions = Action.objects.all()
    return render(request, 'main/index.html', {'actions': actions})