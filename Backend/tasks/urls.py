from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^tasks/(?P<createdBy>[0-9]+)?/?$', views.TaskList.as_view()),
    url(r'^users/$', views.EmployeeList.as_view()),
    url(r'^notifications/$', views.NotificationList.as_view())
]