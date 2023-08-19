import os
import pandas as pd

# Folder containing the existing images
image_folder = "images"

# Get a list of existing image filenames
existing_image_filenames = os.listdir(image_folder)

# List to store image paths and descriptions
image_paths = []
descriptions = []

# Iterate through existing image filenames
for index, filename in enumerate(existing_image_filenames, start=1):
    image_path = os.path.join(image_folder, filename)
    description = os.path.splitext(filename)[0]  # Extract description from filename
    
    # Rename the image file
    new_filename = f"flipkart_{index}.jpg"
    new_image_path = os.path.join(image_folder, new_filename)
    os.rename(image_path, new_image_path)
    
    image_paths.append(new_image_path)  # Save the new image path
    descriptions.append(description)  # Save the description

# Create a DataFrame from the collected data
data = {
    "file_name": image_paths,
    "text": descriptions
}
data_frame = pd.DataFrame(data)

# Save the DataFrame to a CSV file
csv_filename = "metadata.csv"
data_frame.to_csv(csv_filename, index=False)

print("Images renamed and descriptions saved in the CSV file.")
