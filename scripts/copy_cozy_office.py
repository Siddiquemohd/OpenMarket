import shutil
import os

def copy_asset():
    src = r"C:\Users\Admin\.gemini\antigravity-ide\brain\d9549461-8aab-4dad-9fc8-3d0b93db81e1\media__1781788844930.jpg"
    dest = r"c:\workspace\OpenMarket\public\cozy_office.png"
    
    # Copy file and overwrite
    shutil.copy2(src, dest)
    print(f"Copied {src} to {dest} successfully.")

if __name__ == "__main__":
    copy_asset()
