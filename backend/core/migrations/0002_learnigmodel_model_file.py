# Generated by Django 4.2.13 on 2024-12-12 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='learnigmodel',
            name='model_file',
            field=models.FileField(default=None, null=True, upload_to='model-files', verbose_name='Файл с моделью'),
        ),
    ]
