from rest_framework import serializers
from .models import Task, Employee, Notification


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('text', 'timeCreated')


class EmployeeSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()

    def get_id(self, obj):
        return obj.user.id

    def get_email(self, obj):
        return obj.user.email

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = Employee
        fields = ('id', 'email', 'username')


class TaskSerializer(serializers.ModelSerializer):
    createdBy = serializers.SerializerMethodField()
    assignedTo = serializers.SerializerMethodField()

    def get_assignedTo(self, obj):
        return obj.assignedTo.user.username + " (" + obj.assignedTo.user.email + ")"

    def get_createdBy(self, obj):
        return obj.createdBy.user.username + " (" + obj.createdBy.user.email + ")"


    class Meta:
        model = Task
        fields = ('title', 'description', 'reminderTime', 'createdBy', 'assignedTo')


'''
class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    description = serializers.CharField(required=False)
    assignedTo = serializers.ChoiceField(choices=USERS)

    def create(self, validated_data):
        return Task.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.assignedTo = validated_data.get('assignedTo', instance.assignedTo)
        instance.save()
        return instance
'''