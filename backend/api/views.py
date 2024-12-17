from rest_framework.viewsets import ModelViewSet
from api import serializers as api_serializers

from core.models import LearnigModel
from core.models import Investigation
from core.models import InvestigationValue

from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
    HTTP_201_CREATED
)
from rest_framework.response import Response

from api.services import (
    wildfire_satellite_roboflow_yolov8n,
    semushina_yolov8n,
    forest_fire_KaterinaKuhne_yolov8n_cls,
    Katrin_Pochtar_Wildfire_keras,
    AndreyKotelnikov_resnet18_finetuned
)


import matplotlib.pyplot as plt


class InvestigationViewSet(ModelViewSet):
    serializer_class = api_serializers.InvestigationSerializer
    queryset = Investigation.objects.all()
    http_method_names = ['post', 'head', 'options']

    def create(self, request, **kwargs):
        values_for_all_models = []
        serializer = api_serializers.InvestigationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        investigation = serializer.save()

        # Передаём фото для обработки всем имеющимся моделям
        for lmodel in LearnigModel.objects.all():
            value = None
            message = ''

            if lmodel.code == 'wildfire-satellite-roboflow-yolov8n':
                value, message = wildfire_satellite_roboflow_yolov8n(lmodel.model_file.path, investigation.photo.path)

            elif lmodel.code == 'semushina-yolov8n':
                value, message = semushina_yolov8n(lmodel.model_file.path, investigation.photo.path)

            elif lmodel.code == 'forest-fire-KaterinaKuhne-yolov8n-cls':
                value, message = forest_fire_KaterinaKuhne_yolov8n_cls(lmodel.model_file.path, investigation.photo.path)

            elif lmodel.code == 'Katrin-Pochtar-Wildfire-keras':
                value, message = Katrin_Pochtar_Wildfire_keras(lmodel.model_file.path, investigation.photo.path)

            elif lmodel.code == 'AndreyKotelnikov-resnet18_finetuned':
                value, message = AndreyKotelnikov_resnet18_finetuned(lmodel.model_file.path, investigation.photo.path)
            
            if value is not None:
                InvestigationValue.objects.create(
                    lmodel = lmodel,
                    investigation = investigation,
                    value = value,
                    message = message
                )
                values_for_all_models.append(value)

        # Считаем среднее значение по всем моделям
        if len(values_for_all_models):
            investigation.value_mean = sum(values_for_all_models) / len(values_for_all_models)
            investigation.save()
        
        serializer = api_serializers.InvestigationSerializer(investigation)
        return Response(serializer.data, status=HTTP_201_CREATED)


class LearnigModelViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'options']
    serializer_class = api_serializers.LearnigModelSerializer
    queryset = LearnigModel.objects.all()
