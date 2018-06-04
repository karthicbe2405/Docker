from django.db import models
from django.contrib.auth.models import User


class Employee(models.Model):
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username


class Task(models.Model):
    createdTime = models.DateTimeField(auto_now_add=True)
    createdBy = models.ForeignKey('Employee', related_name='created_tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, default='Untitled')
    description = models.TextField(blank=True)
    reminderTime = models.DateTimeField();
    assignedTo = models.ForeignKey('Employee', related_name='assigned_tasks', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-reminderTime',)


class Notification(models.Model):
    text = models.TextField()
    notifyTo = models.ForeignKey('Employee', related_name='notifications', on_delete=models.CASCADE)
    timeCreated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

    class Meta:
        ordering = ('-timeCreated',)