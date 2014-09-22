from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from django.template.context import Context
from django.conf import settings
import json


def index(request):

    return render(request, 'index.html', Context({
        'FT_FEATURES': settings.FT_FEATURES,
        'BK_FEATURES': settings.BK_FEATURES
    }))


def config(request):
    script = json.dumps({
        'FT_FEATURES': settings.FT_FEATURES,
        'VERSION': "0.7",
        'invitationLifetime': settings.VAULTIER.get('invitation_lifetime')
    })
    script = 'InitializeConfig = function(app) {  app.Config = Ember.Object.extend('+script+'); }'

    return HttpResponse(script, mimetype='text/javascript')


def error404(request):
    return redirect('/#'+request.path)

#def dev_mail(request):
#    context = build_context(Member.objects.filter(status=MemberStatusField.STATUS_INVITED).reverse()[0])
#    plain, html = render_email('mailer/invitation', context)
#    return HttpResponse(html)
