from PIL import Image

def save_perfect_crops():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    
    # 1. Left card text crop to check
    left_card = img.crop((10, 8, 386, 212))
    left_card.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\cropped_left_card.png")
    
    # 2. Center glass door image crop
    # The image card has borders and rounded corners. Let's crop it exactly.
    # We want to crop from x=392 to x=650, and y=8 to y=212.
    center_card = img.crop((392, 8, 650, 212))
    center_card.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\cropped_center_card.png")
    
    # Let's save a higher resolution version of the center card image as office_entrance.png.
    # Since we want it to look crisp, let's upscale it 3x or 4x.
    # In the mockup it is 258x204. If we scale it 3x, it's 774x612, which is high quality.
    # Let's save the cropped center image (without outer spacing) to office_entrance.png
    upscaled = center_card.resize((774, 612), Image.Resampling.LANCZOS)
    upscaled.save(r"c:\workspace\OpenMarket\public\office_entrance.png")
    
    # 3. Right founder card crop to check
    right_card = img.crop((656, 8, 1014, 212))
    right_card.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\cropped_right_card.png")
    
    # 4. Section 5 crop
    # Section 5 goes from y=215 to 321, and x=0 to 1024
    section_5 = img.crop((10, 215, 1014, 320))
    section_5.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\cropped_section_5.png")

    print("Perfect crops saved.")

if __name__ == "__main__":
    save_perfect_crops()
