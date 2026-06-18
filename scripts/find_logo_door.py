import os
from PIL import Image

def find_and_crop():
    # Load the mockup screenshot directly from the artifacts directory
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781783548732.png"
    img = Image.open(mockup_path)
    img = img.convert("RGB")
    width, height = img.size
    print(f"Mockup image size: {width}x{height}")
    
    # Let's save a crop of the bottom-middle part of the page to find the glass door
    # The glass door is near the bottom, between y = height - 500 and y = height - 100
    # And horizontally in the middle of the page (x between width//3 and 2*width//3)
    # Let's crop x in [width//3 - 50, 2*width//3 + 50], y in [height - 600, height - 100]
    # In a typical layout, the bottom banner is at the very bottom, and the We'd Love to Meet You section is right above it.
    # Let's crop and save to the workspace so we can view it
    crop_x1 = int(width * 0.35)
    crop_x2 = int(width * 0.65)
    crop_y1 = int(height * 0.70)
    crop_y2 = int(height * 0.95)
    
    test_crop = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
    output_test = r"c:\workspace\OpenMarket\scripts\glass_door_test.png"
    test_crop.save(output_test)
    print(f"Saved test crop to {output_test} (size: {test_crop.size})")

if __name__ == "__main__":
    find_and_crop()
