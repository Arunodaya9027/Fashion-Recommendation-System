import streamlit as st
import tensorflow
import pandas as pd
from PIL import Image
import pickle
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import ResNet50, preprocess_input
from tensorflow.keras.layers import GlobalMaxPooling2D
from tensorflow.keras.models import Sequential
from numpy.linalg import norm
from sklearn.neighbors import NearestNeighbors
import os
import re
import time

features_list = pickle.load(open("image_features_embedding.pkl", "rb"))
img_files_list = pickle.load(open("img_files.pkl", "rb"))
csv_file_path = 'fashion_small/styles.csv'

model = ResNet50(weights="imagenet", include_top=False,
                 input_shape=(224, 224, 3))
model.trainable = False
model = Sequential([model, GlobalMaxPooling2D()])
st.set_page_config(page_title="RevampStyle",
                   page_icon="\U0001F9E2", layout="wide")

title_left, title, title_right = st.columns([2, 7, 2])
title.title('Smart Fashion Recommendation System')
title.subheader(' ')
title.subheader(' ')


def save_file(uploaded_file):
    try:
        with open(os.path.join("uploader", uploaded_file.name), 'wb') as f:
            f.write(uploaded_file.getbuffer())
            return 1
    except:
        return 0


def extract_img_features(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    expand_img = np.expand_dims(img_array, axis=0)
    preprocessed_img = preprocess_input(expand_img)
    result_to_resnet = model.predict(preprocessed_img)
    flatten_result = result_to_resnet.flatten()
    # normalizing
    result_normlized = flatten_result / norm(flatten_result)

    return result_normlized


def recommendd(features, features_list):
    neighbors = NearestNeighbors(
        n_neighbors=6, algorithm='brute', metric='euclidean')
    neighbors.fit(features_list)

    distence, indices = neighbors.kneighbors([features])

    return indices


def image_details(csv_file_path, file_path):
    # Extract the number using regular expression
    id = int(re.search(r'\d+', file_path).group())

    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_file_path)

    # Filter rows where the 'id' column is equal to 1525
    result_df = df[df['id'] == id]
    total_columns = result_df.shape[1]

    # Check if any rows match the condition
    if not result_df.empty:
        # Print the details or return them as needed
        for i in range(1, total_columns):
            st.write(
                str(result_df.columns[i]) + " : " + str(result_df.iloc[0].iloc[i]))
        # If you want to return the details as a dictionary:
        # return result_df.to_dict(orient='records')
    else:
        st.write("No details found for id=", id)


def get_save_file(file):
    if save_file(file):
        # display image
        show_images = Image.open(file)
        size = (400, 400)
        resized_im = show_images.resize(size)

        im_left, im_center, im_right = st.columns([4, 8, 4])
        # Center an image using CSS
        # st.markdown(
        #     f"<div style='display: flex; justify-content: center; align-items: center;'><img src='{st.image.image_to_url(resized_im)}' alt='centered image'></div>",
        #     unsafe_allow_html=True
        # )
        im_center.image(resized_im)
        # extract features of uploaded image
        im_center.header("Recommended Images")
        features = extract_img_features(os.path.join(
            "uploader", file.name), model)
        # st.text(features)
        img_indicess = recommendd(features, features_list)
        col1, col2, col3, col4, col5 = st.columns(5)

        with col1:
            st.header("I")
            st.image(img_files_list[img_indicess[0][0]].replace("\\", "/"))
            image_details(csv_file_path, img_files_list[img_indicess[0][0]])

        with col2:
            st.header("II")
            st.image(img_files_list[img_indicess[0][1]].replace("\\", "/"))
            image_details(csv_file_path, img_files_list[img_indicess[0][1]])

        with col3:
            st.header("III")
            st.image(img_files_list[img_indicess[0][2]].replace("\\", "/"))
            image_details(csv_file_path, img_files_list[img_indicess[0][2]])

        with col4:
            st.header("IV")
            st.image(img_files_list[img_indicess[0][3]].replace("\\", "/"))
            image_details(csv_file_path, img_files_list[img_indicess[0][3]])

        with col5:
            st.header("V")
            st.image(img_files_list[img_indicess[0][4]].replace("\\", "/"))
            image_details(csv_file_path, img_files_list[img_indicess[0][4]])
    else:
        st.header("Some error occur")


cb1_left, cb1, cb1_space, cb2, cb2_right = st.columns([2, 4, 8, 4, 2])
ld1_left, ld1, ld1_space, ld2, ld2_right = st.columns([1, 17, 1, 25, 1])

cp1_left, cp1, cp1_right = st.columns([2, 5, 2])

btn1 = cb1.subheader("Upload Image")
btn2 = cb2.subheader("Capture Image")

ld1.header(" ")
ld1.header(" ")
ld1.header(" ")
ld1.header(" ")
ld1.header(" ")
# Check if "Upload Image" button is clicked
uploaded_file = ld1.file_uploader("Choose your image")

if uploaded_file is not None:
    camera_photo = None
    progress_bar_1 = ld1.progress(0)
    for i in range(100):
        time.sleep(0.02)
        progress_bar_1.progress(i + 1)

    cp1.success("Image Uploaded Successfully")
    get_save_file(uploaded_file)

ld1_space.header(" ")
ld1_space.header(" ")
ld1_space.header(" ")
ld1_space.header(" ")
ld1_space.header(" ")
ld1_space.header(" ")
ld1_space.subheader(" ")
ld1_space.text("OR")

# Check if "Capture Image" button is clicked
camera_photo = ld2.camera_input("Click Using Camera")

if camera_photo is not None:
    uploaded_file = None
    progress_bar_2 = ld2.progress(0)
    for i in range(100):
        time.sleep(0.02)
        progress_bar_2.progress(i + 1)

    cp1.success("Image Uploaded Successfully")
    get_save_file(camera_photo)


# if not (btn1 or btn2):
#     uploaded_file = cp1.file_uploader("Choose your image")

#     if uploaded_file is not None:
#         progress_bar = cp1.progress(0)
#         for i in range(100):
#             time.sleep(0.01)
#             progress_bar.progress(i + 1)

#         cp1.success("Image Uploaded Successfully")
#         get_save_file(uploaded_file)
