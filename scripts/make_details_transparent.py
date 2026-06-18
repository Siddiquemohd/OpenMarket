from PIL import Image

def make_detail_transparent(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    width, height = img.size
    
    threshold = 240
    pixels = img.load()
    visited = set()
    to_check = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    
    # Boundary pixels
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
        
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
            
        r, g, b, a = pixels[x, y]
        if r >= threshold and g >= threshold and b >= threshold:
            transparent_pixels.add((x, y))
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    to_check.append((nx, ny))
                    
    for x, y in transparent_pixels:
        pixels[x, y] = (0, 0, 0, 0)
        
    img.save(img_path, format="PNG")
    print(f"Made {img_path} transparent.")

def main():
    make_detail_transparent(r"c:\workspace\OpenMarket\public\see_you_soon.png")
    make_detail_transparent(r"c:\workspace\OpenMarket\public\green_tea_cup.png")

if __name__ == "__main__":
    main()
