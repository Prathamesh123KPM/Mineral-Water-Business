from PIL import Image
import os
import glob

directory = os.path.join(os.path.dirname(__file__), 'pages', 'bottle')
pattern = os.path.join(directory, 'b1*.jpeg')

files = glob.glob(pattern)
if not files:
    print("No b1*.jpeg files found in pages/bottle/")
else:
    total_saved = 0
    converted = 0
    for jpeg_path in files:
        webp_path = os.path.splitext(jpeg_path)[0] + '.webp'
        orig_size = os.path.getsize(jpeg_path)
        with Image.open(jpeg_path) as img:
            if img.mode in ('RGBA', 'LA'):
                img = img.convert('RGB')
            img.save(webp_path, 'WEBP', quality=80)
        new_size = os.path.getsize(webp_path)
        saved = orig_size - new_size
        total_saved += saved
        converted += 1
        print(f"  {os.path.basename(jpeg_path)} -> {os.path.basename(webp_path)}  ({orig_size//1024}KB -> {new_size//1024}KB, saved {saved//1024}KB)")

    print(f"\n✓ Converted {converted} files.")
    print(f"✓ Total saved: {total_saved / 1024 / 1024:.2f} MB")
