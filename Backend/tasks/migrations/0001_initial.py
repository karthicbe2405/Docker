# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('createdTime', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(default=b'Untitled', max_length=100)),
                ('description', models.TextField()),
                ('reminderTime', models.DateTimeField()),
                ('assignedTo', models.ForeignKey(related_name='assigned_tasks', to='tasks.Employee')),
                ('createdBy', models.ForeignKey(related_name='created_tasks', to='tasks.Employee')),
            ],
            options={
                'ordering': ('-createdTime',),
            },
        ),
    ]
