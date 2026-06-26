import os
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    print("Pillow not found. Installing...")
    install("Pillow")
    from PIL import Image

def optimize_images(directory, max_width=500):
    extensions = {'.png', '.jpg', '.jpeg', '.webp'}
    count = 0
    
    # Files to optimize (based on list_dir output)
    target_files = [
        'water.png', 'bottle.png', 'natural.png', 'plant.png', 'process.png',
        'sales.png', 'shrink.png', 'pet.png', 'machine.png', 'industrial.png',
        'vedica.png', 'ash.png', 'aqua.png', 'bisleri.png', 'bailey.png',
        'divya.png', 'rc.png', 'glass.png', 'juice.png', 'carbonated.png',
        'pitaya.png', 'benie.png', 'ro.png', 'vodka.png', 'fill.png', 'bottleimg.png', 'softdrink.png', 'newhome.png'
    ]

    for filename in os.listdir(directory):
        if filename not in target_files:
            continue
            
        ext = os.path.splitext(filename)[1].lower()
        if ext in extensions:
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    # Calculate new size
                    width, height = img.size
                    if width > max_width:
                        ratio = max_width / width
                        new_height = int(height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save
                        img.save(filepath, optimize=True, quality=85)
                        print(f"Optimized: {filename} ({width}x{height} -> {max_width}x{new_height})")
                        count += 1
            except Exception as e:
                print(f"Failed {filename}: {e}")

    print(f"Total optimized: {count}")

if __name__ == "__main__":
    optimize_images(".")
