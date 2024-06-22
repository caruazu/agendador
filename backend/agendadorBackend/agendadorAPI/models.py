from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):

    PROFESSIONALS = [
        ("A","João"),
        ("B","Maria"),
    ]

    client = models.CharField(max_length=100)
    professional = models.CharField(max_length=1, choices=PROFESSIONALS)
    start = models.DateTimeField()
    end = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User,
        null=True,
        on_delete=models.SET_NULL,
        related_name="event"
    )

    def __str__(self):
        return self.client