from django.urls import path
from . import views

app_name='members'

urlpatterns = [
    path('', views.main, name='main'),
    path('members/', views.members, name='members'),
    path('submit_form/', views.submit_form, name='submit_form'),
    path('target_page/', views.target_page, name='target_page'), #verification
    path('credentials/', views.credentials, name='credentials'), #credentials
    path('forgotpass/', views.forgotpass, name='forgotpass'),
    path('credentials/', views.redirect, name='credentials'),
    path('credentials/', views.target_view, name='target_view'),
    path('loginredirect/', views.loginredirect, name='loginredirect'),
    path('vm_provisioning/', views.vm_provisioning, name='vm_provisioning'),
]