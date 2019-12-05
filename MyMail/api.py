from MyMail.models import MyMail
from rest_framework import viewsets, permissions
from .serializers import MailSerializer


# Mail ViewSet

class MailViewSet(viewsets.ModelViewSet):
    queryset = MyMail.objects.all()
    permission_classes =  [
        permissions.AllowAny
    ]
    serializer_class = MailSerializer
