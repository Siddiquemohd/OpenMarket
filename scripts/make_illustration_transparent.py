import os
from PIL import Image

def make_transparent():
    img_path = r"c:\workspace\OpenMarket\public\partnership_illustration.png"
    img = Image.open(img_path)
    img = img.convert("RGBA")
    width, height = img.size
    
    # We will use flood fill from the four corners to make the white background transparent.
    # We'll use a threshold of 240 to handle near-white compression artifacts.
    threshold = 240
    
    pixels = img.load()
    visited = set()
    to_check = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    
    # Also add boundary pixels as starting points
    for x in range(width):
        to_check.append((x, 0))
        to_check.append((x, height - 1))
    for y in range(height):
        to_check.append((0, y))
        to_check.append((width - 1, y))
        
    transparent_pixels = set()
    
    while to_check:
        x, y = to_check.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        # Check coordinates validity
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        r, g, b, a = pixels[x, y]
        # Check if the pixel is near white
        if r >= threshold and g >= threshold and b >= threshold:
            transparent_pixels.add((x, y))
            # Add neighbors (4-connectivity)
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    to_check.append((nx, ny))
                    
    # Update pixels to transparent
    for x, y in transparent_pixels:
        pixels[x, y] = (0, 0, 0, 0)
        
    # Let's crop the image to its non-transparent bounding box so we don't have large empty margins
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        # Resize to a clean height/width (e.g. max height 350px or keep aspect ratio)
        print(f"Bbox cropped size: {img_cropped.size}")
        img_cropped.save(img_path, format="PNG")
        print("Successfully cropped and saved transparent PNG illustration.")
    else:
        img.save(img_path, format="PNG")
        print("Successfully saved transparent PNG illustration.")

if __name__ == "__main__":
    make_transparent()
