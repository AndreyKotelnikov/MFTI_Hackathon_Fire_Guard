import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array


# Нужно преобразовать массив вероятностей Y 
# (где каждая вероятность показывает уверенность в наличии пожара в конкретной области)
# в одно число, которое будет отражать общую уверенность в том, что “где-то что-то есть” на изображении.
# Используем Вероятность объединения событий (ИЛИ)
def calculate_combined_probability(confidences):
    if not confidences:
        # Если нет объектов, вероятность 0
        return 0

    # Вероятность отсутствия пожара в каждой области: 1 - confidence
    no_fire_probabilities = [1 - conf for conf in confidences]

    # Вероятность того, что нет пожара нигде:
    combined_no_fire_prob = np.prod(no_fire_probabilities)

    # Вероятность того, что хотя бы где-то есть пожар:
    combined_probability = 1 - combined_no_fire_prob
    return combined_probability


# Интерпретируем результаты модели таким образом, что
# если она указывает на какую-то область, значит она уже утверждает что что-то нашла, т.е. pred > 0.5
# Это важно, потому что вероятность с которой модель даёт ответ включает в себя не только уверенность в наличии пожара
# но и уверенность в месте его расположения.
# Такая "уверенность" модели всегда будет заведомо меньше вероятности просто наличия пожара
def from_rectangle_to_yesno(value):
    return (1 + value) / 2 if value > 0 else 0

def preprocess_image(image_path, target_size):
    image = load_img(image_path, target_size=target_size)
    image_array = img_to_array(image)
    image_array = image_array / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    return image_array
