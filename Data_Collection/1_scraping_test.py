
# html_content = requests.get('''
#                             https://www.flipkart.com/clothing-and-accessories/topwear/
#                             tshirt/men-tshirt/pr?sid=clo,ash,ank,edy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts
#                             ''').text

# # Create a BeautifulSoup object to parse the HTML content
# soup = BeautifulSoup(html_content, "html.parser")

import os
import requests
from bs4 import BeautifulSoup
import csv

# Define the URL to scrape
url = "https://www.flipkart.com/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo,ash,ank,edy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts"

# Send a GET request to the URL
response = requests.get(url)
content = response.content

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(content, "html.parser")

# Create a folder to save images
image_folder = "images"
if not os.path.exists(image_folder):
    os.makedirs(image_folder)

# Initialize lists to store data
data = []

# Find all product items on the page
product_items = soup.find_all("div", class_="_1xHGtK _373qXS")

# ... (previous code)

# Iterate through each product item on the next page
for item in product_items:
    image_element = item.find("img", class_="_2r_T1I")
    description_element = item.find("a", class_="IRpwTa")
    
    if image_element and description_element:
        image_url = image_element["src"]
        description = description_element.text.strip()
        
        # Save the image in the folder
        image_response = requests.get(image_url)
        if image_response.status_code == 200:
            image_filename = os.path.join(image_folder, f"{description}.jpg")
            with open(image_filename, "wb") as image_file:
                # image_response = requests.get(image_url)
                image_file.write(image_response.content)
        
            data.append({"Image Path": image_filename, "Description": description})
        else:
            print(f"Error downloading image for description: {description}")
    else:
        print("Skipped an item due to missing image or description.")

# ... (rest of the code)

# Write data to a CSV file
csv_file = "path_and_descriptions.csv"
with open(csv_file, "w", newline="", encoding="utf-8") as csvfile:
    csv_writer = csv.DictWriter(csvfile, fieldnames=["Image Path", "Description"])
    csv_writer.writeheader()
    csv_writer.writerows(data)

print(f"Data saved to {csv_file}")


# # URL for the next page
# next_page_url = "https://www.flipkart.com/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo%2Cash%2Cank%2Cedy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts&page=2"

# # Send a GET request to the next page URL
# next_page_response = requests.get(next_page_url)
# next_page_content = next_page_response.content

# # Create a BeautifulSoup object for the next page
# next_page_soup = BeautifulSoup(next_page_content, "html.parser")

# # ... (previous code)

# # Initialize lists to store new data
# new_data = []

# # Find all product items on the next page
# next_page_product_items = next_page_soup.find_all("div", class_="_1xHGtK _373qXS")

# # ... (previous code)

# # Iterate through each product item on the next page
# for item in next_page_product_items:
#     image_element = item.find("img", class_="_2r_T1I")
#     description_element = item.find("a", class_="IRpwTa")
    
#     if image_element and description_element:
#         image_url = image_element["src"]
#         description = description_element.text.strip()
        
#         # Save the image in the folder
#         image_response = requests.get(image_url)
#         if image_response.status_code == 200:
#             image_filename = os.path.join(image_folder, f"{description}.jpg")
#             with open(image_filename, "wb") as image_file:
#                 image_file.write(image_response.content)
        
#             new_data.append({"Image URL": image_filename, "Description": description})
#         else:
#             print(f"Error downloading image for description: {description}")
#     else:
#         print("Skipped an item due to missing image or description.")

# # ... (rest of the code)


# # Append new data to the existing CSV file
# with open(csv_file, "a", newline="", encoding="utf-8") as csvfile:
#     csv_writer = csv.DictWriter(csvfile, fieldnames=["Image URL", "Description"])
#     csv_writer.writerows(new_data)

# print(f"New data from the next page saved to {csv_file}")