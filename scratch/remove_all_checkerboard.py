from PIL import Image

def remove_all_checkerboard():
    # Load the image
    img = Image.open("public/mission_diagram_mockup.png")
    img_rgba = img.convert("RGBA")
    width, height = img_rgba.size
    pixels = img_rgba.load()

    # Iterate through all pixels in the image
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Check if it matches the background white/grey (checkered pattern)
            if r >= 235 and g >= 235 and b >= 235 and abs(r - g) <= 5 and abs(g - b) <= 5:
                pixels[x, y] = (0, 0, 0, 0)

    # Crop to the actual drawing bounding box to maximize space utilization
    bbox = img_rgba.getbbox()
    if bbox:
        cropped_img = img_rgba.crop(bbox)
        cropped_img.save("public/mission_diagram_mockup.png")
        print(f"Background successfully removed globally. Cropped to bbox: {bbox}")
    else:
        img_rgba.save("public/mission_diagram_mockup.png")
        print("Background successfully removed globally (no bbox found)")

if __name__ == "__main__":
    remove_all_checkerboard()
