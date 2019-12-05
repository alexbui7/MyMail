from rest_framework import serializers
from MyMail.models import MyMail


# Create Serializer

class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyMail
        fields = '__all__'
