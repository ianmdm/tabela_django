from django.urls import path
from . import views
urlpatterns = [
    path('', views.main),
    path('requisicao', views.requisicao)
]