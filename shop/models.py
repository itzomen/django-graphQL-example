from django.db import models
from django.contrib.auth.models import User
from users.models import ExtendUser


class Product(models.Model):

    user = models.ForeignKey(ExtendUser, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
        
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
