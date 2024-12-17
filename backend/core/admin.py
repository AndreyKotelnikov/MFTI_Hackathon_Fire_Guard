from django.contrib import admin

from core.models import LearnigModel
from core.models import Investigation
from core.models import InvestigationValue

admin.site.site_header = 'Панель администратора'


@admin.register(LearnigModel)
class LearnigModelAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'author', 'dataset_link',
    ]

@admin.register(Investigation)
class InvestigationAdmin(admin.ModelAdmin):
    list_display = [
        'created', 'value_mean', 'photo',
    ]

@admin.register(InvestigationValue)
class InvestigationValueAdmin(admin.ModelAdmin):
    list_display = [
        'lmodel', 'value', 'investigation',
    ]
