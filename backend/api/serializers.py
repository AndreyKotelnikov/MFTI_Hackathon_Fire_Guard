from rest_framework import serializers
from core.models import LearnigModel
from core.models import Investigation
from core.models import InvestigationValue
from easy_thumbnails.files import get_thumbnailer

class LearnigModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = LearnigModel
        fields = (
            'id',
            'name',
            'author',
            'code',
        )



class InvestigationValueSerializer(serializers.ModelSerializer):

    model_name = serializers.CharField(source='lmodel.name', read_only=True)

    class Meta:
        model = InvestigationValue

        fields = (
            'id',
            'value',
            'lmodel',
            'model_name',
            'message'
        )


class InvestigationSerializer(serializers.ModelSerializer):
    preview = serializers.SerializerMethodField()
    values_detail = InvestigationValueSerializer(source='values', required=False, allow_null=True, read_only=True, many=True)

    class Meta:
        model = Investigation
        fields = (
            'id',
            'photo',
            'preview',
            # 'lmodel',
            # 'result',
            'value_mean',
            'values_detail'
        )

    def create(self, validated_data):
        return super().create(validated_data)

    @staticmethod
    def get_preview(obj):
        # crop_options = {'size': (100, 100), 'crop': True}
        crop_options = {'size': (250, 250), 'crop': 'scale'}
        try:
            return get_thumbnailer(obj.photo).get_thumbnail(crop_options).url
        except Exception as e:
            pass
        # return obj.file.storage._strip_signing_parameters(obj.file.url)
