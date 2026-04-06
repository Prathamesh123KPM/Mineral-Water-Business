import os
from PIL import Image

def optimize_images(directory):
    extensions = {'.png', '.jpg', '.jpeg'}
    total_saved = 0
    
    for filename in os.listdir(directory):
        ext = os.path.splitext(filename)[1].lower()
        if ext in extensions:
            filepath = os.path.join(directory, filename)
            # Create webp filename
            base_name = os.path.splitext(filename)[0]
            webp_path = os.path.join(directory, f"{base_name}.webp")
            
            try:
                with Image.open(filepath) as img:
                    original_size = os.path.getsize(filepath)
                    
                    # Convert to RGB if necessary (e.g. for RGBA PNGs)
                    if img.mode in ('RGBA', 'P'):
                        img = img.convert('RGB')
                    
                    # Max width for high quality display but not excessive
                    max_width = 1600
                    if img.width > max_width:
                        ratio = max_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    
                    img.save(webp_path, 'WEBP', quality=80)
                    webp_size = os.path.getsize(webp_path)
                    
                    saved = original_size - webp_size
                    total_saved += saved
                    print(f"Converted {filename}: {original_size/1024:.1f}KB -> {webp_size/1024:.1f}KB (Saved {saved/1024:.1f}KB)")
                    
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

    print(f"\nOptimization Complete!")
    print(f"Total Disk Space Saved: {total_saved/(1024*1024):.2f}MB")

if __name__ == "__main__":
    optimize_images(".")
