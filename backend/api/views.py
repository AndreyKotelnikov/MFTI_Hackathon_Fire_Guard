from rest_framework.viewsets import ModelViewSet
from api import serializers as api_serializers

from core.models import LearnigModel
from core.models import Investigation

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
        value = 0
        message = ''
        serializer = api_serializers.InvestigationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        investigation = serializer.save()

        if investigation.lmodel.code == 'wildfire-satellite-roboflow-yolov8n':
            value, message = wildfire_satellite_roboflow_yolov8n(investigation.lmodel.model_file.path, investigation.photo.path)

        elif investigation.lmodel.code == 'semushina-yolov8n':
            value, message = semushina_yolov8n(investigation.lmodel.model_file.path, investigation.photo.path)

        elif investigation.lmodel.code == 'forest-fire-KaterinaKuhne-yolov8n-cls':
            value, message = forest_fire_KaterinaKuhne_yolov8n_cls(investigation.lmodel.model_file.path, investigation.photo.path)

        elif investigation.lmodel.code == 'Katrin-Pochtar-Wildfire-keras':
            value, message = Katrin_Pochtar_Wildfire_keras(investigation.lmodel.model_file.path, investigation.photo.path)

        elif investigation.lmodel.code == 'AndreyKotelnikov-resnet18_finetuned':
            value, message = AndreyKotelnikov_resnet18_finetuned(investigation.lmodel.model_file.path, investigation.photo.path)

        investigation.value = value
        investigation.result = message
        investigation.save()
        
        serializer = api_serializers.InvestigationSerializer(investigation)
        return Response(serializer.data, status=HTTP_201_CREATED)


class LearnigModelViewSet(ModelViewSet):
    http_method_names = ['get', 'head', 'options']
    serializer_class = api_serializers.LearnigModelSerializer
    queryset = LearnigModel.objects.all()
