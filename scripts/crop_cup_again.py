from PIL import Image

def crop_cup():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    
    # Crop the green tea cup outline icon
    # Adjust x starting from 504 to avoid capturing the 'p' of "Partnership"
    tea_cup = img.crop((504, 260, 529, 295))
    # Let's upscale
    tea_cup_up = tea_cup.resize((75, 105), Image.Resampling.LANCZOS)
    tea_cup_up.save(r"c:\workspace\OpenMarket\public\green_tea_cup.png")
    print("Re-saved green_tea_cup.png with adjusted crop bounds.")

if __name__ == "__main__":
    crop_cup()
