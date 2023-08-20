from PIL import Image
import os

# Folder containing the original images
input_folder = "images"

# Folder to save resized and converted images
output_folder = "images-10"

# Make sure the output folder exists
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Iterate through all image files in the input folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(".jpg"):
        # Open the original image
        image_path = os.path.join(input_folder, filename)
        original_image = Image.open(image_path)

        # Resize the image to 256x256 using ANTIALIAS
        resized_image = original_image.resize((256, 256), Image.Resampling.LANCZOS)

        # Save the resized image with jpeg format
        output_filename = os.path.splitext(filename)[0] + ".jpeg"
        output_path = os.path.join(output_folder, output_filename)
        resized_image.save(output_path, format="JPEG")

print("Images resized and converted.")
