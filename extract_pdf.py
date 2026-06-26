import sys
import subprocess

def install_and_import(package):
    try:
        __import__(package)
    except ImportError:
        print(f"Installing {package}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    install_and_import("pypdf")
    import pypdf
    
    reader = pypdf.PdfReader("seo_report.pdf")
    text = ""
    for idx, page in enumerate(reader.pages):
        text += f"--- Page {idx+1} ---\n"
        text += page.extract_text() + "\n"
        
    with open("seo_report_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully extracted PDF text to seo_report_text.txt")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
