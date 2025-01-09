from PIL import Image
import pytesseract


image_path = input("Enter Image path")
image = Image.open(image_path)


extracted_text = pytesseract.image_to_string(image)

extracted_text = extracted_text.strip()
print(f"Extracted Text: {extracted_text}")
extracted_text = extracted_text.replace(" ", "")
extracted_text = extracted_text.replace("÷", "/")
extracted_text = extracted_text.replace("×", "*")
extracted_text = extracted_text.replace("x", "*")
extracted_text = extracted_text.replace("—", "-")
extracted_text = extracted_text.replace("^", "**")


is_valid = 1
for char in extracted_text:
    if not (char.isdigit() or char in "+-*/().×÷—^ "): 
        is_valid = 0
        break

if is_valid:
    result = eval(extracted_text)
    print(f"{extracted_text} = {result}")
else:
    print("The extracted text is not a valid arithmetic expression.")
