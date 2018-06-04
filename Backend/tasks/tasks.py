from __future__ import absolute_import

from celery import shared_task
from .models import Notification
from ws4redis.publisher import RedisPublisher
from ws4redis.redis_store import RedisMessage


@shared_task
def notify(title, description, assignedTo):
    text = title + ': ' + description
    n = Notification(text=text, notifyTo=assignedTo)
    n.save()
    redis_publisher = RedisPublisher(facility='foobar', broadcast=True)
    message = RedisMessage('Hello there!')
    redis_publisher.publish_message(message)
    return True