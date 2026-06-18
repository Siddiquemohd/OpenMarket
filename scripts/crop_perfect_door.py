from PIL import Image

def crop_door():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781783548732.png"
    img = Image.open(mockup_path)
    img = img.convert("RGB")
    
    # Crop coordinates: x in [246, 434], y in [776, 922]
    # Let's double check if there are borders on the crop
    # x1=246, y1=776, x2=434, y2=922
    cropped = img.crop((246, 776, 434, 922))
    print(f"Crop size: {cropped.size}")
    
    # Upscale 4x to 752x584 using LANCZOS
    upscaled = cropped.resize((752, 584), Image.Resampling.LANCZOS)
    print(f"Upscaled crop size: {upscaled.size}")
    
    output_path = r"c:\workspace\OpenMarket\public\office_entrance.png"
    upscaled.save(output_path)
    print(f"Saved glass door office entrance to {output_path}")

if __name__ == "__main__":
    crop_door()
