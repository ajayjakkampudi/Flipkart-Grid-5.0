import os
import requests
from bs4 import BeautifulSoup

# Define the URL to scrape
# url = "https://www.flipkart.com/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo,ash,ank,edy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts"

# URL for the next page
# url = "https://www.flipkart.com/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo%2Cash%2Cank%2Cedy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts&page=5"

# # Send a GET request to the URL
# response = requests.get(url)
# content = response.content

# # Create a BeautifulSoup object to parse the HTML content
# soup = BeautifulSoup(content, "html.parser")

# Create a folder to save images
image_folder = "images"
if not os.path.exists(image_folder):
    os.makedirs(image_folder)

# # Find all product items on the page
# product_items = soup.find_all("div", class_="_1xHGtK _373qXS")

# # Find the next page URL if needed
# # next_page_element = soup.find("a", class_="nxt")
# # next_page_url = next_page_element["href"]

# # Iterate through each product item on the next page
# for item in product_items:
#     image_element = item.find("img", class_="_2r_T1I")
#     description_element = item.find("a", class_="IRpwTa")
    
#     if image_element and description_element:
#         image_url = image_element["src"]
#         description = description_element.text.strip()
        
#         # Save the image in the folder with description in the filename
#         image_response = requests.get(image_url)
#         if image_response.status_code == 200:
#             image_filename = os.path.join(image_folder, f"{description}.jpg")
#             with open(image_filename, "wb") as image_file:
#                 image_file.write(image_response.content)
#         else:
#             print(f"Error downloading image for description: {description}")
#     else:
#         print("Skipped an item due to missing image or description.")

# print("Images downloaded and saved in the folder.")

# Define the base URL
base_url = "https://www.flipkart.com/clothing-and-accessories/blazers-suits-waistcoat-coat/pr?sid=clo%2Cupk&otracker=categorytree&p%5B%5D=facets.ideal_for%255B%255D%3DMen&otracker=nmenu_sub_Men_0_Suits%2C+Blazers+%26+Waistcoats&page="


# Iterate through page numbers from 5 to 20
for page_num in range(2, 51):
    # Construct the full URL
    url = base_url + str(page_num)
    
    # Send a GET request to the URL
    response = requests.get(url)
    content = response.content

    # Create a BeautifulSoup object to parse the HTML content
    soup = BeautifulSoup(content, "html.parser")

    # Find all product items on the page
    product_items = soup.find_all("div", class_="_1xHGtK _373qXS")  # _1xHGtK _373qXS e30oNt

    # Iterate through each product item on the page
    for item in product_items:
        # T-Shirts -  _2r_T1I
        image_element = item.find("img", class_="_2r_T1I") # Formal Shirts _2UzuFa
        description_element = item.find("a", class_="IRpwTa")

        if image_element and description_element:
            image_url = image_element["src"]
            description = description_element.text.strip()

            # Save the image in the folder with description in the filename
            image_response = requests.get(image_url)
            if image_response.status_code == 200:
                image_filename = os.path.join(image_folder, f"{description}.jpg")
                with open(image_filename, "wb") as image_file:
                    image_file.write(image_response.content)
            else:
                print(f"Error downloading image for description: {description}")
        else:
            print("Skipped an item due to missing image or description.")

print("Images downloaded and saved in the folder.")
