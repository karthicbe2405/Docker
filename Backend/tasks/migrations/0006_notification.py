# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_auto_20180526_1112'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('timeCreated', models.DateTimeField(auto_now_add=True)),
                ('text', models.TextField()),
            ],
            options={
                'ordering': ('-timeCreated',),
            },
        ),
    ]
