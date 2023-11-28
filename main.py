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

features_list = pickle.load(open("image_features_embedding.pkl", "rb"))
img_files_list = pickle.load(open("img_files.pkl", "rb"))
csv_file_path = 'fashion_small/styles.csv'

model = ResNet50(weights="imagenet", include_top=False,
                 input_shape=(224, 224, 3))
model.trainable = False
model = Sequential([model, GlobalMaxPooling2D()])
st.set_page_config(page_title="RevampStyle",
                   page_icon="\U0001F9E2", layout="wide")

st.title('Smart Fashion Recommendation System')


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


uploaded_file = st.file_uploader("Choose your image")
if uploaded_file is not None:
    if save_file(uploaded_file):
        # display image
        show_images = Image.open(uploaded_file)
        size = (400, 400)
        resized_im = show_images.resize(size)
        # Center an image using CSS
        # st.markdown(
        #     f"<div style='display: flex; justify-content: center; align-items: center;'><img src='{st.image.image_to_url(resized_im)}' alt='centered image'></div>",
        #     unsafe_allow_html=True
        # )
        st.image(resized_im)
        # extract features of uploaded image
        st.header("Recommended Images")
        features = extract_img_features(os.path.join(
            "uploader", uploaded_file.name), model)
        # st.text(features)
        img_indicess = recommendd(features, features_list)
        col1, col2, col3, col4, col5 = st.columns(5)

        with col1:
            st.header("I")
            st.image(img_files_list[img_indicess[0][0]])
            image_details(csv_file_path, img_files_list[img_indicess[0][0]])

        with col2:
            st.header("II")
            st.image(img_files_list[img_indicess[0][1]])
            image_details(csv_file_path, img_files_list[img_indicess[0][1]])

        with col3:
            st.header("III")
            st.image(img_files_list[img_indicess[0][2]])
            image_details(csv_file_path, img_files_list[img_indicess[0][2]])

        with col4:
            st.header("IV")
            st.image(img_files_list[img_indicess[0][3]])
            image_details(csv_file_path, img_files_list[img_indicess[0][3]])

        with col5:
            st.header("V")
            st.image(img_files_list[img_indicess[0][4]])
            image_details(csv_file_path, img_files_list[img_indicess[0][4]])
    else:
        st.header("Some error occur")
