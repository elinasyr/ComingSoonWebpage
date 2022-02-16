from django.contrib import admin

# Register your models here.
from .models import Action,About

admin.site.register(Action)
admin.site.register(About)