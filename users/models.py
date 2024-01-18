from django.db import models

class User(models.Model):
    username = models.CharField(max_length=12)
    pub_date = models.DateTimeField("date created")

    def __str__(self):
            return self.username
