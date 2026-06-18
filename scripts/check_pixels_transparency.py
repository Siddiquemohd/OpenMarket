from PIL import Image

def test_pixels():
    img_path = r"c:\workspace\OpenMarket\public\see_you_soon.png"
    img = Image.open(img_path)
    print(f"Mode: {img.mode}, Size: {img.size}")
    
    # Check a few corner pixels which should be transparent (alpha = 0)
    pixels = img.load()
    corner_samples = [(0, 0), (5, 5), (img.size[0] - 1, 0), (0, img.size[1] - 1)]
    for x, y in corner_samples:
        print(f"Pixel at ({x}, {y}): {pixels[x, y]}")

if __name__ == "__main__":
    test_pixels()
