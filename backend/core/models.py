from django.db import models
from urllib.parse import unquote
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

class LearnigModel(models.Model):

    class Meta:
        verbose_name = 'Обучаемая модель'
        verbose_name_plural = 'Обучаемые модели'

    name = models.CharField(verbose_name="Понятное название", max_length=255, null=False, blank=False)
    author = models.CharField(verbose_name="Кто обучал", max_length=255, null=False, blank=False)
    code = models.CharField(verbose_name="Код", max_length=255, null=False, blank=False)
    description = models.TextField(verbose_name="Описание модели", null=False, blank=True)
    dataset_link = models.CharField(verbose_name="Ссылка на датасет", null=False, blank=False)
    model_file = models.FileField(verbose_name="Файл с моделью", upload_to='model-files', null=True, default=None)

    def __str__(self):
        return self.name + ' (' + self.author + ')'

class Investigation(models.Model):

    class Meta:
        verbose_name = 'Исследование'
        verbose_name_plural = 'Исследования'

    # lmodel = models.ForeignKey('LearnigModel', verbose_name="Обучаемая модель", related_name="investigations", null=True, blank=True, on_delete=models.SET_NULL)
    photo = models.ImageField(verbose_name="Исследуемое фото", upload_to='photos')
    photo_out = models.ImageField(verbose_name="Фото-результат", upload_to='photos_out')
    # result = models.TextField(verbose_name="Результат", null=False, blank=True)
    value_mean = models.PositiveIntegerField(verbose_name="Средняя вероятность", default=0, blank=True, validators=[MinValueValidator(0), MaxValueValidator(100)])
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.photo.file.name + str(self.created)


class InvestigationValue(models.Model):

    class Meta:
        verbose_name = 'Значение исследования'
        verbose_name_plural = 'Значения исследований'

    lmodel = models.ForeignKey('LearnigModel', verbose_name="Обучаемая модель", related_name="investigation_values", null=True, blank=True, on_delete=models.SET_NULL)
    investigation = models.ForeignKey('Investigation', verbose_name="Исследование", related_name="values", null=True, blank=True, on_delete=models.SET_NULL)
    message = models.TextField(verbose_name="Результат словами", null=False, blank=True)
    value = models.PositiveIntegerField(verbose_name="Вероятность", default=0, blank=True, validators=[MinValueValidator(0), MaxValueValidator(100)])
