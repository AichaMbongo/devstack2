from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.template import loader



def members(request):
  # template = loader.get_template('credentials.html')
  # return HttpResponse(template.render())
    return render(request, 'credentials.html')

def verification(request):
    template = loader.get_template('verification.html')
    return HttpResponse(template.render())

def submit_form(request):
    # Process the form data
    # ...

    # Redirect to another page
    return redirect('verification.html')



def target_page(request):
  return render(request, 'verification.html')

def credentials(request):
  return render(request, 'credentials.html')

def forgotpass(request):
  return render(request, 'forgotpass.html')

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())


def target_view(request):
    return render(request, 'credentials.html')
    return HttpResponse(template.render())

def loginredirect(request):
    return render(request, 'loginredirect.html')
    return HttpResponse(template.render())


def vm_provisioning(request):
    return render(request, 'vm_provisioning.html')
    return HttpResponse(template.render())
