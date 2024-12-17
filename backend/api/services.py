import torch
from torchvision import transforms
from ultralytics import YOLO
from PIL import Image, ImageEnhance
import numpy as np
from tensorflow.keras.models import load_model
from api.helpers import calculate_combined_probability, from_rectangle_to_yesno, preprocess_image

def wildfire_satellite_roboflow_yolov8n(model_file_path, image_path):
    message = ''
    yolo_model = YOLO(model_file_path)
    results = yolo_model.predict(source=image_path)
    confidences = []
    for result in results:
        boxes = result.boxes
        if boxes:
            message += f"Найдено объектов: {len(boxes)}, "
            confidences.extend([box.conf.item() for box in boxes])
    value = calculate_combined_probability(confidences)
    predicted_confidence = 100 * from_rectangle_to_yesno(value)
    message += f"Вероятность пожара: {predicted_confidence:.2f}%"
    return predicted_confidence, message

def semushina_yolov8n(model_file_path, image_path):
    yolo_model = YOLO(model_file_path)
    results = yolo_model.predict(source=image_path)
    probs = results[0].probs
    predicted_class_index = results[0].probs.top1
    predicted_class_name = results[0].names[predicted_class_index]
    predicted_confidence = 100 * probs.top1conf.item()
    # if predicted_class_name == 'nowildfire':
    #     predicted_confidence = 100 - predicted_confidence
    return predicted_confidence, f"Класс: {predicted_class_name}, Вероятность пожара: {predicted_confidence:.2f}%"

def forest_fire_KaterinaKuhne_yolov8n_cls(model_file_path, image_path):
    yolo_model = YOLO(model_file_path)
    results = yolo_model.predict(source=image_path)
    probs = results[0].probs
    predicted_class_index = results[0].probs.top1
    predicted_class_name = results[0].names[predicted_class_index]
    predicted_confidence = 100 * probs.top1conf.item()
    # if predicted_class_name == 'nowildfire':
    #     predicted_confidence = 100 - predicted_confidence
    return predicted_confidence, f"Класс: {predicted_class_name}, Вероятность пожара: {predicted_confidence:.2f}%"

def Katrin_Pochtar_Wildfire_keras(model_file_path, image_path):
    img_size=(32, 32)
    keras_model = load_model(model_file_path)
    test_image = preprocess_image(image_path, img_size)
    predictions = keras_model.predict(test_image)
    predicted_confidence = predictions[0][0] * 100  # Convert to percentage
    return predicted_confidence, f"Вероятность пожара: {predicted_confidence:.2f}%"

def AndreyKotelnikov_resnet18_finetuned(model_file_path, image_path):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    torch_model = torch.load(model_file_path, map_location=device, weights_only=False)
    torch_model.eval()  # Переводим в режим оценки
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                            [0.229, 0.224, 0.225])
    ])
    img = Image.open(image_path).convert('RGB')
    input_tensor = transform(img)
    input_batch = input_tensor.unsqueeze(0).to(device)
    with torch.no_grad():
        outputs = torch_model(input_batch)
        probs = torch.softmax(outputs, dim=1)
        predicted_confidence = 100 * probs[0, 0].item()
        message = f'Вероятность пожара: {predicted_confidence:.2f}%'
    return predicted_confidence, message

