from django.http.response import HttpResponse
from django.shortcuts import render

def main(request):
    return render(request, 'main/main.html')

def requisicao(request):
    return render(request, 'main/infoo.json')