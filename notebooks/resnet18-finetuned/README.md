Ниже представлено описание процесса дообучения модели ResNet18 на двух наборах данных (снимки с дронов и со спутников с пожаром и без), \
используемых для бинарной классификации наличия или отсутствия пожара/дыма на изображениях.

Автор: Андрей Котельников

## Исходные данные

**Используемые датасеты:**

1. Датасет с дроновыми снимками пожара:  
   Ссылка: [https://www.kaggle.com/datasets/dani215/fire-dataset/data](https://www.kaggle.com/datasets/dani215/fire-dataset/data)  
   Структура:  
   - Папка "fire": изображения с пожаром/дымом  
   - Папка "no_fire": изображения без пожара

2. Датасет с изображениями со спутника:  
   Ссылка: [https://www.kaggle.com/datasets/abdelghaniaaba/wildfire-prediction-dataset/data](https://www.kaggle.com/datasets/abdelghaniaaba/wildfire-prediction-dataset/data)  
   Структура аналогична:  
   - Папка "fire": изображения с пожаром, дымом или следами выгорания  
   - Папка "no_fire": изображения без признаков пожара

Для обучения в данном примере изображения из обоих датасетов объединены в общую структуру директорий (папка `fire_dataset`), где есть две подпапки:
- `fire`
- `no_fire`

Аналогичная структура создана для валидации и тестирования (папка `fire_test_dataset`).

Целевая задача: бинарная классификация, где класс 0 соответствует "fire", а класс 1 соответствует "no_fire".

## Предобученная модель

Используется модель **ResNet18**, предобученная на наборе данных ImageNet (1k классов). \
В рамках дообучения (fine-tuning) последний полносвязный слой модели заменяется на слой с 2-мя классами.

### Почему ResNet18?

- ResNet18 — относительно компактная и быстрая модель, показывающая высокую точность на широком спектре задач компьютерного зрения.  
- Предобученные веса на ImageNet позволяют использовать знания о низко- и среднеуровневых признаках изображений, что ускоряет сходимость и улучшает качество на небольшой специфической выборке.

**Обобщённая структура ResNet18** (для ImageNet):

- Вход: (3, 224, 224)
- `Conv1 (7x7, stride=2), BN, ReLU`
- `MaxPool (3x3, stride=2)`
- Layer1: 2 BasicBlock (64 каналов)
- Layer2: 2 BasicBlock (128 каналов, первый блок с stride=2)
- Layer3: 2 BasicBlock (256 каналов, первый блок с stride=2)
- Layer4: 2 BasicBlock (512 каналов, первый блок с stride=2)
- Average Pooling (глобальный средний пуллинг)
- Linear (512 -> 1000 для ImageNet), или Linear (512 -> num_classes) для задачи дообучения.

## Предварительная обработка данных и аугментация

**Трансформации для обучения (train_transforms):**  
- `Resize((224, 224))`: изменение размера входного изображения до 224x224 пикселей (стандартный размер для ResNet).  
- `RandomHorizontalFlip()`: случайное горизонтальное отражение для увеличения вариативности данных.  
- `ToTensor()`: преобразование изображения в тензор PyTorch.  
- `Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])`: нормализация по каналам с использованием средних и стандартных отклонений ImageNet. 

**Трансформации для валидации и тестирования (val_transforms, test_transforms):**  
- `Resize((224, 224))`  
- `ToTensor()`  
- `Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])`

Важно: на валидации и тестировании не используется аугментация, чтобы результаты были стабильными.

## Разделение данных

- Данные обучения делятся на обучающую (train) и валидационную (val) выборки в соотношении 80/20.  
- Данные теста (test_dataset) берутся из отдельной папки.

## Гиперпараметры и настройки обучения

- **Число классов:** `num_classes = 2` (fire / no_fire)
- **Число эпох:** `num_epochs = 50`  
- **Размер батча:** `batch_size = 256`  
- **Скорость обучения (learning rate):** `learning_rate = 0.001`  
- **Оптимизатор:** `Adam` (оптимизатор, хорошо себя зарекомендовавший при работе с предобученными сетями)  
- **Функция потерь:** `CrossEntropyLoss` (классический выбор для задачи классификации)

Предполагалось, что достаточно небольшое значение `learning_rate = 0.001` вместе с Adam позволит быстро достичь хорошей сходимости без чрезмерного взрывного роста градиентов.

## Процесс обучения

- **Инициализация:** Модель ResNet18 с загруженными предобученными весами ImageNet. Последний слой заменён на `nn.Linear(num_ftrs, 2)`.
- **Цикл по эпохам (всего 50):**
  - Перевод модели в режим обучения: `model.train()`
  - Итерация по батчам обучающей выборки:
    - Прямой проход (forward)
    - Вычисление потерь
    - Обратный проход (backpropagation) и обновление весов `optimizer.step()`
  - Подсчёт среднего loss и accuracy на обучении за эпоху.
  - Оценка на валидационной выборке: `model.eval()` + расчет точности (Val Acc).
  - Логирование результатов (Loss, Train Acc, Val Acc) в консоль и файл.

После завершения всех эпох — вывод общего времени обучения. В данном примере обучение заняло 93 минуты на GPU (16ГБ).

## Метрики оценки

**Используемые метрики:**

- **Accuracy (точность):** доля правильно классифицированных примеров.  
- **Precision (точность в смысле метрики precision):** доля предсказанных положительных, которые действительно положительны.  
- **Recall (полнота):** доля истинно положительных, которые модель смогла определить как положительные.  
- **F1-score:** гармоническое среднее между precision и recall.  
- **Classification Report:** полный отчёт по каждому классу, включающий precision, recall, f1-score и поддержку (количество образцов класса).

Для валидации и тестирования применяется `sklearn.metrics` для вычисления указанных метрик. \
Это даёт детальное представление о качестве модели как в целом, так и по каждому классу.

## Результаты обучения

В процессе обучения фиксируются метрики на каждой эпохе: 
- Уже на первой эпохе:  
  `Loss: 0.1203, Train Acc: 0.9562, Val Acc: 0.8815`  
  Это говорит о том, что модель быстро учится благодаря предобученным весам.

- К 7-й эпохе:  
  `Train Acc: 0.9923, Val Acc: 0.9730`  
  Модель достигает очень высокой точности на валидации менее чем за 10 эпох.

- К 50-й эпохе:
  `Train Acc: 0.9994, Val Acc: 0.9846`  
  Это указывает на очень сильное приближение к данным обучения и хорошую генерализацию на валидации.

Финальные показатели на валидационном наборе:
- Accuracy: ~0.9846
- Precision: ~0.9850
- Recall: ~0.9841
- F1: ~0.9845

Отчёт показывает, что модель хорошо сбалансирована между двумя классами (fire / no_fire).

## Сохранение модели

После обучения модель сохраняется в файл:  
`finetuned_models\resnet18_finetuned.pth`

Саму модель в формате pt можно скачать по [ссылке](https://drive.google.com/file/d/1OFlV3Yl_5hoRd8Cdf0Zsa_4hcNxY4nYo/view?usp=sharing) (размер файла: 42.7 МБ).

Это позволяет в дальнейшем загрузить её и использовать для инференса или повторной оценки.

## Тестирование на отложенной тестовой выборке

На тестовом наборе (отдельный датасет, который не использовался в обучении и валидации) оценка метрик показывает:

- Accuracy: 0.9546  
- Precision: 0.9530  
- Recall: 0.9559  
- F1: 0.9542

Classification Report для теста:
``` 
           precision    recall  f1-score   support
no_fire       0.97      0.94      0.96       417
fire          0.93      0.97      0.95       332

accuracy                           0.95       749
macro avg       0.95      0.96      0.95       749
weighted avg    0.96      0.95      0.95       749
```

Показатели на тесте чуть ниже, чем на валидации, что ожидаемо, но всё ещё очень высоки. Модель эффективно отличает снимки с пожаром от снимков без пожара.

## Общие выводы

1. **Качество модели:**  
   Модель ResNet18, дообученная на совокупности данных с дронов и спутников, достигает высоких показателей точности и прочих метрик на валидации и тесте.  
   На валидации точность превышает 98%, на тесте около 95%, что говорит о хорошем качестве модели.

2. **Обучение и сходимость:**  
   Благодаря предобученным весам и настройкам гиперпараметров (Adam, LR=0.001, аугментации) модель очень быстро сошла к высокому качеству уже к 30-ой эпохе.

3. **Переобучение:**  
   На последних эпохах точность на обучении практически достигает 100%. \
Валидационная точность также высока, что указывает на то, что модель не испытывает явного переобучения, либо оно минимально, учитывая высокие метрики на валидации и тесте.

4. **Универсальность модели:**  
   Модель успешно обобщается на тестовый набор, который содержит снимки как с дронов так и со спутников. \
Это говорит о том, что обученные фильтры ResNet18 хорошо справляются с различными типами изображений.

5. **Что можно было предпринять для улучшения предсказаний:**  
   - использовать более тонкие настройки аугментации, обучать чуть дольше
   - попробовать другие оптимизаторы или реализации fine-tuning (например, разморозить некоторые ранние слои) 
   - использовать более сильную архитектуру (ResNet50, EfficientNet и т.п.)
