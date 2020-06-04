from django.contrib import admin

from .models import Employee, Task, Notification

# Register your models here.

admin.site.register(Employee)
admin.site.register(Task)
admin.site.register(Notification)
