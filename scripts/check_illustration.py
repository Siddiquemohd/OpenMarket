from PIL import Image

def check_illustration():
    img_path = r"c:\workspace\OpenMarket\public\partnership_illustration.png"
    img = Image.open(img_path)
    print(f"Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
    
    if img.mode == "RGBA":
        # Check if there are non-255 alpha values (transparency)
        alpha = img.split()[-1]
        extrema = alpha.getextrema()
        print(f"Alpha channel extrema: {extrema}")
    else:
        print("No alpha channel present.")

if __name__ == "__main__":
    check_illustration()
