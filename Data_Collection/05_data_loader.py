# Push the data to HuggingFace for the training purpose
from datasets import load_dataset

dataset = load_dataset("imagefolder", data_dir="C:/Users/harma/Music/Flipkart Grid 5.0/images-10", drop_labels=True)

dataset.push_to_hub("harshiitsingh/flipkart-scraped-dresses-10")