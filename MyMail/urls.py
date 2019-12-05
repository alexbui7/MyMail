from django.urls import path
from rest_framework import routers
from .api import MailViewSet

router = routers.DefaultRouter()
router.register('api/mymail', MailViewSet, 'mymail')

urlpatterns = router.urls
