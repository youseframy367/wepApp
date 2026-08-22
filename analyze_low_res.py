import json

def analyze():
    with open('image_audit_report.json', 'r') as f:
        report = json.load(f)
    
    low_res = []
    threshold = 100 # pixels
    
    for category in ['public', 'assets']:
        for img in report[category]:
            # If both dimensions are small, it's a potential pixelation risk if scaled
            if img['width'] < threshold and img['height'] < threshold:
                low_res.append(img)
    
    # Sort by size (smallest first)
    low_res.sort(key=lambda x: x['width'] * x['height'])
    
    with open('low_res_report.json', 'w') as f:
        json.dump(low_res, f, indent=2)
    
    print(f"Found {len(low_res)} potential low-resolution images.")

if __name__ == "__main__":
    analyze()
