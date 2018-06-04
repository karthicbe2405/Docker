# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='contact',
            field=models.BigIntegerField(default=9999999999L),
            preserve_default=False,
        ),
    ]
