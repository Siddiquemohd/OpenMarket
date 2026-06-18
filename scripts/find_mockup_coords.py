from PIL import Image

def find_coords():
    mockup_path = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781787808843.png"
    img = Image.open(mockup_path)
    print(f"Mockup dimensions: {img.size}")
    
    # Let's inspect the pixels horizontally along a row in the middle of the height
    # to find the columns.
    width, height = img.size
    mid_y = height // 2
    
    # We will print the colors of a horizontal slice to find the boundaries of the white cards.
    # White card borders are light gray, cards themselves are white (255, 255, 255).
    # Background between columns is light gray/blue (around 245, 247, 250).
    bg_pixels = []
    for x in range(width):
        r, g, b = img.getpixel((x, mid_y))[:3]
        # Check if it's white or background
        bg_pixels.append((x, (r, g, b)))
        
    # Print segments where color changes significantly
    current_state = None
    segments = []
    start_x = 0
    for x, color in bg_pixels:
        # Check if color is white (R > 250, G > 250, B > 250)
        is_white = color[0] > 250 and color[1] > 250 and color[2] > 250
        # Check if it's the middle image (color is not white and not the light grey background)
        # Background is around (248, 249, 250) or similar light gray.
        is_bg = color[0] > 244 and color[1] > 246 and color[2] > 248
        
        state = "white" if is_white else ("bg" if is_bg else "img")
        if state != current_state:
            if current_state is not None:
                segments.append((current_state, start_x, x - 1, bg_pixels[start_x][1]))
            current_state = state
            start_x = x
    segments.append((current_state, start_x, width - 1, bg_pixels[start_x][1]))
    
    for state, x1, x2, color in segments:
        print(f"Segment: {state} from x={x1} to x={x2}, example color={color}")

if __name__ == "__main__":
    find_coords()
