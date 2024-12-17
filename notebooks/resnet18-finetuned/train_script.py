import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, random_split
from torchvision import datasets, transforms, models
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report

import os
import datetime
import time
from PIL import ImageFile

# Класс для дублирования вывода в файл и консоль
class Logger:
    def __init__(self, file_path):
        self.file = open(file_path, "w")

    def write(self, message):
        print(message)
        self.file.write(message + "\n")

    def close(self):
        self.file.close()

# Функция для обучения модели
def train_model(model, criterion, optimizer, train_loader, val_loader, device, num_epochs=5, logger=None):
    model.to(device)  # Перенос модели на устройство (CPU или GPU)
    start_time = time.time()  # Запоминаем время начала обучения
    for epoch in range(num_epochs):
        model.train()  # Перевод модели в режим обучения
        running_loss = 0.0
        running_corrects = 0
        total = 0

        # Цикл по батчам тренировочного набора
        for inputs, labels in train_loader:
            inputs = inputs.to(device)  # Перенос данных на устройство
            labels = labels.to(device)  # Перенос меток классов на устройство

            optimizer.zero_grad()  # Обнуляем градиенты оптимизатора
            outputs = model(inputs)  # Прямой проход через модель: предсказания логитов
            _, preds = torch.max(outputs, 1)  # Получаем предсказанные классы из логитов
            loss = criterion(outputs, labels)  # Вычисляем функцию потерь

            loss.backward()  # Обратное распространение ошибки (backprop)
            optimizer.step()  # Обновление параметров модели

            # Суммирование статистик для вычисления среднего loss и accuracy
            running_loss += loss.item() * inputs.size(0)  # Суммируем потери умноженные на размер батча
            running_corrects += torch.sum(preds == labels.data)  # Считаем количество верных предсказаний
            total += labels.size(0)  # Общее количество обработанных образцов

        epoch_loss = running_loss / total  # Средний loss за эпоху
        epoch_acc = running_corrects.double() / total  # Средняя точность (accuracy) за эпоху

        # Валидация на отложенной выборке
        model.eval()  # Перевод модели в режим валидации/инференса
        val_running_corrects = 0
        val_total = 0
        with torch.no_grad():  # Отключаем вычисление градиентов на валидации
            for val_inputs, val_labels in val_loader:
                val_inputs = val_inputs.to(device)
                val_labels = val_labels.to(device)
                val_outputs = model(val_inputs)  # Предсказание на валидационном наборе
                _, val_preds = torch.max(val_outputs, 1)
                val_running_corrects += torch.sum(val_preds == val_labels.data)
                val_total += val_labels.size(0)

        val_acc = val_running_corrects.double() / val_total  # Средняя точность на валидации

        message = (
            f"Epoch [{epoch + 1}/{num_epochs}] - Loss: {epoch_loss:.4f}, "
            f"Train Acc: {epoch_acc:.4f}, Val Acc: {val_acc:.4f}"
        )
        logger.write(message)  # Логируем результаты эпохи

    end_time = time.time()
    duration = (end_time - start_time) / 60  # Вычисляем продолжительность обучения в минутах
    logger.write(f"Training completed in {duration:.2f} minutes.")

    return model  # Возвращаем дообученную модель

# Функция для оценки модели на тестовом наборе
def evaluate_model(model, data_loader, device, logger=None):
    model.eval()  # Режим оценки
    model.to(device)  # Переносим модель на устройство
    all_labels = []
    all_preds = []
    start_time = time.time()
    with torch.no_grad():  # Без вычисления градиентов
        for inputs, labels in data_loader:
            inputs = inputs.to(device)
            outputs = model(inputs)  # Прямой проход для предсказаний
            _, preds = torch.max(outputs, 1)  # Получаем предсказанные классы
            all_labels.extend(labels.tolist())  # Добавляем истинные метки в список
            all_preds.extend(preds.cpu().tolist())  # Добавляем предсказания (перенесённые на CPU) в список

    # Вычисляем метрики с помощью sklearn
    accuracy = accuracy_score(all_labels, all_preds)
    precision = precision_score(all_labels, all_preds, average='macro', zero_division=0)
    recall = recall_score(all_labels, all_preds, average='macro', zero_division=0)
    f1 = f1_score(all_labels, all_preds, average='macro', zero_division=0)
    class_report = classification_report(all_labels, all_preds, zero_division=0)

    end_time = time.time()
    duration = (end_time - start_time) / 60
    logger.write(f"Testing completed in {duration:.2f} minutes.")  # Время тестирования
    logger.write(f"Accuracy: {accuracy:.4f}, Precision: {precision:.4f}, Recall: {recall:.4f}, F1: {f1:.4f}")
    logger.write("Classification Report:")
    logger.write(class_report)  # Подробный отчёт классификации

    return accuracy, precision, recall, f1, class_report

# Функция для загрузки модели с сохранёнными весами
def load_model(model_name, num_classes, device, finetuned_models_dir):
    # Инициализируем модель без предобученных весов (weights=None)
    if model_name == "resnet18":
        model = models.resnet18(weights=None)
        num_ftrs = model.fc.in_features
        model.fc = nn.Linear(num_ftrs, num_classes)  # Заменяем последний слой под нужное число классов
    elif model_name == "alexnet":
        model = models.alexnet(weights=None)
        num_ftrs = model.classifier[6].in_features
        model.classifier[6] = nn.Linear(num_ftrs, num_classes)
    elif model_name == "vgg16":
        model = models.vgg16(weights=None)
        num_ftrs = model.classifier[6].in_features
        model.classifier[6] = nn.Linear(num_ftrs, num_classes)
    else:
        raise NotImplementedError("Модель не поддерживается этим примером")

    # Путь к сохранённой дообученной модели
    model_path = os.path.join(finetuned_models_dir, f"{model_name}_finetuned.pth")

    # Загрузка состояния модели
    state_dict = torch.load(model_path, map_location=device, weights_only=True)
    model.load_state_dict(state_dict)  # Загружаем веса в модель
    model.to(device)
    model.eval()  # Режим оценки

    return model

def main():
    # Генерация имени файла лога с указанием текущего времени
    current_time = datetime.datetime.now().strftime("%d.%m.%Y_%H_%M")
    log_file = f"{current_time}_training_result.log"
    logger = Logger(log_file)  # Создаём логгер для записи результатов

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")  # Используем GPU если доступен
    logger.write(f"Using device: {device}")

    # ----------------------------
    # Настройки
    # ----------------------------
    data_dir = "fire_dataset"  # Путь к обучающему датасету
    test_data_dir = "fire_test_dataset"  # Путь к тестовому датасету
    batch_size = 256
    num_classes = 2  # Классы: fire, not_fire
    num_epochs = 50
    learning_rate = 0.001
    logger.write(f"Training {num_classes} classes with {num_epochs} epochs, learning rate: {learning_rate}, batch size: {batch_size}")

    # Создание директорий для сохранения моделей (если они ещё не существуют)
    pretrained_models_dir = "pretrained_models"
    finetuned_models_dir = "finetuned_models"
    os.makedirs(pretrained_models_dir, exist_ok=True)
    os.makedirs(finetuned_models_dir, exist_ok=True)

    # Определяем преобразования для данных (аугментацию и нормализацию)
    train_transforms = transforms.Compose([
        transforms.Resize((224, 224)),  # Изменяем размер изображения до 224x224
        transforms.RandomHorizontalFlip(),  # Случайное горизонтальное отражение для аугментации
        transforms.ToTensor(),  # Преобразование в тензор
        transforms.Normalize([0.485, 0.456, 0.406],  # Нормализация как в предобученных ImageNet моделях
                             [0.229, 0.224, 0.225])
    ])
    val_transforms = transforms.Compose([
        transforms.Resize((224, 224)),  # Для валидации просто ресайз
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ])
    test_transforms = val_transforms  # Для теста используем те же трансформации, что и для валидации

    # Загрузка полного датасета
    ImageFile.LOAD_TRUNCATED_IMAGES = True  # Разрешаем загрузку "обрезанных" изображений
    full_dataset = datasets.ImageFolder(root=data_dir, transform=train_transforms)
    train_size = int(0.8 * len(full_dataset))  # 80% данных пойдут на обучение
    val_size = len(full_dataset) - train_size   # Остальные 20% - на валидацию
    train_dataset, val_dataset = random_split(full_dataset, [train_size, val_size])
    val_dataset.dataset.transform = val_transforms  # На валидации используем валидационные трансформации

    # Создаем загрузчики данных (DataLoader) для тренировки, валидации и теста
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True, num_workers=4)
    val_loader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False, num_workers=4)
    test_dataset = datasets.ImageFolder(root=test_data_dir, transform=test_transforms)
    test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False, num_workers=4)

    # Предобученная модель ResNet18 с весами ImageNet
    pretrained_models = {
        "resnet18": models.resnet18(weights=models.ResNet18_Weights.IMAGENET1K_V1),
    }

    # Цикл по моделям (здесь фактически одна — resnet18)
    for model_name, model in pretrained_models.items():
        logger.write(f"\nTraining and evaluating model: {model_name}")

        # Для ResNet18 заменяем последний полносвязный слой на новый, соответствующий num_classes
        if model_name.startswith("resnet"):
            num_ftrs = model.fc.in_features
            model.fc = nn.Linear(num_ftrs, num_classes)

        model = model.to(device)  # Модель на GPU/CPU
        criterion = nn.CrossEntropyLoss()  # Функция потерь для классификации
        optimizer = optim.Adam(model.parameters(), lr=learning_rate)  # Оптимизатор Adam

        # Обучаем модель
        model = train_model(model, criterion, optimizer, train_loader, val_loader, device, num_epochs=num_epochs,
                            logger=logger)

        # Оцениваем модель на валидации
        evaluate_model(model, val_loader, device, logger=logger)

        # Сохранение дообученной модели
        save_path = os.path.join(finetuned_models_dir, f"{model_name}_finetuned.pth")
        torch.save(model.state_dict(), save_path)
        logger.write(f"Finetuned model saved to {save_path}")

    # Тестирование модели на тестовом наборе
    for model_name in pretrained_models.keys():
        logger.write(f"\nTesting model: {model_name}")
        model = load_model(model_name, num_classes, device, finetuned_models_dir)  # Загружаем сохранённую модель
        evaluate_model(model, test_loader, device, logger=logger)  # Оцениваем на тестовых данных

    logger.close()

if __name__ == '__main__':
    main()
