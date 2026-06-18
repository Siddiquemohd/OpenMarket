from PIL import Image

def crop_details():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    
    # Crop "See you soon!" text with wider boundaries so we don't cut off the smile line
    # Left border: 805, Top: 220, Right: 935, Bottom: 315
    see_you_soon = img.crop((805, 220, 935, 315))
    
    # We will save it in public folder as see_you_soon.png
    # Let's upscale it 2x for crispness on high density displays
    see_you_soon_up = see_you_soon.resize((260, 190), Image.Resampling.LANCZOS)
    see_you_soon_up.save(r"c:\workspace\OpenMarket\public\see_you_soon.png")
    print("Saved see_you_soon.png")
    
    # Crop the green tea cup icon next to "a Great Partnership"
    # Let's look at y=260 to 295, x=495 to 530
    tea_cup = img.crop((495, 260, 528, 295))
    # Let's upscale 3x
    tea_cup_up = tea_cup.resize((99, 105), Image.Resampling.LANCZOS)
    tea_cup_up.save(r"c:\workspace\OpenMarket\public\green_tea_cup.png")
    print("Saved green_tea_cup.png")

if __name__ == "__main__":
    crop_details()
