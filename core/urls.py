from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('quiz.urls')),
    path('shop/', include('shop.urls')),
    path('quiz/', include('quiz.urls')),
]
