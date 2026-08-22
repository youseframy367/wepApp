import os
from PIL import Image
import json

def audit_images(directory):
    report = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.avif')):
                path = os.path.join(root, file)
                try:
                    with Image.open(path) as img:
                        width, height = img.size
                        file_size = os.path.getsize(path) / 1024  # KB
                        report.append({
                            "path": path.replace('wepApp/', ''),
                            "name": file,
                            "width": width,
                            "height": height,
                            "size_kb": round(file_size, 2),
                            "aspect_ratio": round(width / height, 2) if height > 0 else 0
                        })
                except Exception as e:
                    print(f"Error processing {path}: {e}")
    return report

if __name__ == "__main__":
    public_images = audit_images('public')
    assets_images = audit_images('app/assets')
    
    full_report = {
        "public": public_images,
        "assets": assets_images
    }
    
    with open('image_audit_report.json', 'w') as f:
        json.dump(full_report, f, indent=2)
    
    print(f"Audit complete. Found {len(public_images)} images in public and {len(assets_images)} in assets.")
