from PIL import Image

def analyze_mockup():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    
    # Let's inspect the background color of the left card in Section 4
    # (e.g. at x=100, y=50)
    bg_left = img.getpixel((100, 50))[:3]
    
    # Background color of right card in Section 4 (e.g. at x=800, y=50)
    bg_right = img.getpixel((800, 50))[:3]
    
    # Background color of Section 5 card (e.g. at x=500, y=260)
    bg_sec5 = img.getpixel((500, 260))[:3]
    
    # Background color outside the cards (e.g. at x=400, y=5)
    bg_outside = img.getpixel((400, 5))[:3]
    
    print(f"Left card BG color: {bg_left}")
    print(f"Right card BG color: {bg_right}")
    print(f"Section 5 card BG color: {bg_sec5}")
    print(f"Outside page BG color: {bg_outside}")

    # Now let's crop the 'See you soon' graphic on the right of Section 5.
    # It is located around x=800 to 950, y=220 to 310 in the mockup.
    # Let's crop it and save it.
    see_you_soon = img.crop((810, 220, 920, 310))
    see_you_soon.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\see_you_soon_raw.png")
    
    # Also crop the partnership illustration from Section 5
    # It is on the left, around x=15 to 270, y=218 to 318
    partnership_illustration = img.crop((15, 218, 270, 318))
    partnership_illustration.save(r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\partnership_illustration_raw.png")

if __name__ == "__main__":
    analyze_mockup()
