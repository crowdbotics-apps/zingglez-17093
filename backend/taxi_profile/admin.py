from django.contrib import admin
from .models import Document, UserProfile, DriverProfile, InviteCode, Notification

admin.site.register(Notification)
admin.site.register(Document)
admin.site.register(UserProfile)
admin.site.register(DriverProfile)
admin.site.register(InviteCode)

# Register your models here.
