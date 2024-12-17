# Дообучение модели классификации yolov8l-cls на размеченном датасете

## Датасет
https://www.kaggle.com/datasets/abdelghaniaaba/wildfire-prediction-dataset/data

## Дообученная модель
https://drive.google.com/file/d/1-_KmyblTpq3EVBrjCHIgH1jJgDrcCYCJ/view?usp=sharing

## Гиперпараметры и детали тренировки
1. **batch**: 16
2. **Optimizer**: SGD
3. **Learning Rate (lr)**: 0.01
4. **Momentum**: 0.937
5. **Weight Decay**: 0.0005
6. **Number of Epochs**: 10
7. **fliplr**: 0.5
8.  **scale**: 0.1
9.  **degrees**: 5
10.  **hsv_h**: 0.005
11.  **hsv_s**: 0.2
12.  **hsv_v**: 0.2
13. **Image Sizes**: 320 (train), 320 (val)

## Архитектура модели
1. **Number of Layers**: 183
2. **Number of Parameters**: 36,202,306
3. **Number of Gradients**: 0
4. **GFLOPs**: 99.1

## Параметры тестирования
- Accuracy: 0.9879345893859863
- Precision: 0.9985557481224726
- Recall: 0.9933908045977011
- F1 Score: 0.9959665802362432

**Classification Report:**
```            
                precision    recall  f1-score   support

No forest fire       0.99      1.00      1.00      2820
  Forest fire!       1.00      0.99      1.00      3480

      accuracy                           1.00      6300
     macro avg       1.00      1.00      1.00      6300
  weighted avg       1.00      1.00      1.00      6300
```


 **Метрики для каждого класса:**

*Метрики для класса 0 (No forest fire):*
- Precision: 0.9767
- Recall: 0.9968
- F1-Score: 0.9867

*Метрики для класса 1 (Forest fire!):*
- Precision: 0.9974
- Recall: 0.9807
- F1-Score: 0.9890

 **Матрица ошибок:**
 
  ![image](https://github.com/user-attachments/assets/c1878e93-1aa8-4482-bee6-4e801841faf7)
