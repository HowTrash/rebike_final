from django.http import HttpResponse, JsonResponse
from django.core import serializers

from .serializers import user_to_dict, UserSerializer
from .userUtil import user_findByName, user_compPW


def user_login(request):
    input_id = request.GET.get('id', '')
    input_pw = request.GET.get('pw', '')
    is_login = None
    a = None

    if input_pw != '' and input_id != '':
        user = user_findByName(input_id).first()
        if user:
            is_login = user_compPW(input_pw, user)
            if is_login:
                a = UserSerializer(user)

    data = {
        'user': a,
        'is_login': is_login,
    }

    return JsonResponse(data, safe=False)


def temp(request):
    test = {'hello': 'hello'}
    return JsonResponse(test, safe=False)
