from .models import Task, Employee, Notification
from .serializers import TaskSerializer, EmployeeSerializer, NotificationSerializer
from rest_framework import generics
from rest_framework import permissions
from .tasks import notify
from datetime import datetime
from django.utils import timezone


class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )

    def get_queryset(self):
        createdBy = self.kwargs['createdBy']
        if createdBy is None:
            return Task.objects.all()
        return Task.objects.filter(createdBy=Employee.objects.get(user_id=createdBy))

    def perform_create(self, serializer):
        assignedTo = Employee.objects.get(user_id=self.request.data['assignedTo'])
        time = datetime.strptime(self.request.data['reminderTime'], '%Y-%m-%dT%H:%M')
        notify.apply_async((self.request.data['title'], self.request.data['description'], assignedTo), eta=time)
        serializer.save(createdBy=Employee.objects.get(user=self.request.user), assignedTo=assignedTo)


class EmployeeList(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class NotificationList(generics.ListAPIView):
    serializer_class = NotificationSerializer

    def get_queryset(self):
        return Notification.objects.filter(notifyTo__user = self.request.user)

'''
class TaskList(APIView):
    def get(self, request, format=None):
        snippets = Task.objects.all()
        serializer = TaskSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        request.data.createdBy = User.objects.get(pk=request.data.createdBy);
        request.data.assignedTo = User.objects.get(pk=request.data.assignedTo);
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
'''
'''
def task_list(request):

    if request.method == 'GET':
        snippets = Task.objects.all()
        serializer = TaskSerializer(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
'''