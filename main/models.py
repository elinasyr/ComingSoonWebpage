from django.db import models

# Create your models here.

class Action(models.Model):
    text = models.TextField()
    link = models.URLField(max_length=200)
    image = models.ImageField()
    title = models.CharField(max_length = 200)
    date = models.IntegerField()

    EVENT_TYPES = (
        ('EVENTS', 'Previous Events'),
        ('DIALOGUES', 'Dialogues'),
        ('WEBSITES', 'Previous Websites'),
        ('BLOG', 'Blog'),
    )

    event_type = models.CharField(max_length = 20 , choices = EVENT_TYPES, default='Type')  

