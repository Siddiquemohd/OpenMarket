from PIL import Image

def slice_mockup():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    width, height = img.size
    print(f"Mockup size: {width}x{height}")
    
    # We want to find the horizontal gap between Section 4 and Section 5.
    # Let's inspect vertical columns to find the gap which should be a light gray/blue line or background.
    # Let's print out the average colors of rows to find where Section 4 ends.
    for y in range(height):
        # Sample color at x = 500 (which is in the middle column)
        color = img.getpixel((500, y))[:3]
        # We know Section 4 middle column is the glass door image.
        # Below the glass door image, there should be background (light grey).
        # Let's print the colors around the middle to see where the glass door image ends.
        if y % 10 == 0:
            print(f"Row y={y}: color={color}")

if __name__ == "__main__":
    slice_mockup()
