# import pandas as pd

# csv_file_path = 'fashion_small/styles.csv'
# df = pd.read_csv(csv_file_path)
# # print(df.dtypes)
# result_df = df[df['id'] == 1525]
# # print(result_df)
# print(result_df.columns[4] + " : " + str(result_df.iloc[0].iloc[4]))


import streamlit as st
import re

# Given string
file_path = 'fashion_small/images\\1000.jpg'

# Extract the number using regular expression
match = re.search(r'\d+', file_path)

# Check if a match is found
if match:
    extracted_number = match.group()
    print(extracted_number)
else:
    print("No number found in the string.")


st.image("https://placekitten.com/500/300")

st.markdown(
    """
<style>
button {
    position: relative !important;
    left: 455px !important;
    top: 43px !important;
}
button:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100;
    left: 0;
}
</style>
""",
    unsafe_allow_html=True,
)
