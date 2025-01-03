# Generated by Django 4.2.13 on 2024-12-12 16:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LearnigModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Понятное название')),
                ('author', models.CharField(max_length=255, verbose_name='Кто обучал')),
                ('code', models.CharField(max_length=255, verbose_name='Код')),
                ('description', models.TextField(blank=True, verbose_name='Описание модели')),
                ('dataset_link', models.CharField(verbose_name='Ссылка на датасет')),
            ],
            options={
                'verbose_name': 'Обучаемая модель',
                'verbose_name_plural': 'Обучаемые модели',
            },
        ),
        migrations.CreateModel(
            name='Investigation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='photos', verbose_name='Исследуемое фото')),
                ('photo_out', models.ImageField(upload_to='photos_out', verbose_name='Фото-результат')),
                ('result', models.TextField(blank=True, verbose_name='Результат')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('lmodel', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='investigations', to='core.learnigmodel', verbose_name='Обучаемая модель')),
            ],
            options={
                'verbose_name': 'Исследование',
                'verbose_name_plural': 'Исследования',
            },
        ),
    ]
