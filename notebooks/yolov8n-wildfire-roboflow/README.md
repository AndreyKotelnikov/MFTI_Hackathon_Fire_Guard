# Обучение модели с помощью YOLA с использованием размеченного датасета

## Датасет
https://universe.roboflow.com/umbc-s6g8c/wildfire-detection-satellite


## Гиперпараметры и детали тренировки
1. **batch**: 16
2. **Optimizer**: AdamW
3. **Learning Rate (lr)**: 0.001667
4. **Momentum**: 0.9
5. **Weight Decay**:
   - Weight (decay=0.0)
   - Weight (decay=0.0005)
   - Bias (decay=0.0)
6. **Number of Epochs**: 8
7. **Transfer Weights**: 319/355 items from pretrained weights
8. **Image Sizes**: 128 (train), 128 (val)

## Архитектура модели
1. **Number of Layers**: 225
2. **Number of Parameters**: 3,011,238
3. **Number of Gradients**: 3,011,222
4. **GFLOPs**: 8.2

## Параметры тестирования
- Accuracy: 0.8017711171662125
- Precision: 0.9285714285714286
- Recall: 0.6679841897233202
- F1 Score: 0.7770114942528736

Classification Report:

              precision    recall  f1-score   support

     Class 0       0.73      0.94      0.82       709
     Class 1       0.93      0.67      0.78       759

    accuracy                           0.80      1468
    
    macro avg      0.83      0.81      0.80      1468
    weighted avg   0.83      0.80      0.80      1468

