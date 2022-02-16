from django.shortcuts import render

# Create your views here.
from .models import Action, About
def index(request):
    actions = Action.objects.all()
    about = list(About.objects.all())
    return render(request, 'main/index.html', {'actions': actions, 'about':about})