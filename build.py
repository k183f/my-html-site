import os
import sys

# Read all source files
files = {}
for path, key in [
    (r'E:\111\css\style.css', 'css'),
    (r'E:\111\js\data.js', 'data_js'),
    (r'E:\111\js\bazi.js', 'bazi_js'),
    (r'E:\111\js\tarot.js', 'tarot_js'),
    (r'E:\111\js\app.js', 'app_js'),
]:
    with open(path, 'r', encoding='utf-8') as f:
        files[key] = f.read()

# Read current index.html
with open(r'E:\111\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace placeholders
html = html.replace('/*_DATA_JS_*/', files['data_js'])
html = html.replace('/*_BAZI_JS_*/', files['bazi_js'])
html = html.replace('/*_TAROT_JS_*/', files['tarot_js'])
html = html.replace('/*_APP_JS_*/', files['app_js'])

# Clean up any remaining partial bazi content that was already inserted
# The file might already have some bazi content between /*_DATA_JS_*/ and /*_TAROT_JS_*/
# Let's check if /*_BAZI_JS_*/ still exists or was already replaced

if '/*_BAZI_JS_*/' not in html:
    print("bazi marker already replaced, checking for partial content...")
    # Find the data_js content end and tarot_js start
    data_end = html.find('/*_DATA_JS_*/') + len('/*_DATA_JS_*/')
    tarot_pos = html.find('/*_TAROT_JS_*/')
    
    if data_end < tarot_pos:
        # There's content between data and tarot - that's the partial bazi content
        # Replace everything between /*_DATA_JS_*/ and /*_TAROT_JS_*/ with just data_js + new bazi_js
        before = html[:data_end]
        after = html[tarot_pos:]
        html = before + '\n' + files['bazi_js'] + '\n' + after
        print("Replaced partial bazi content with full content")

# Write output
with open(r'E:\111\index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Write log
with open(r'E:\111\build_log.txt', 'w', encoding='utf-8') as f:
    f.write(f"CSS: {len(files['css'])} bytes\n")
    f.write(f"data.js: {len(files['data_js'])} bytes\n")
    f.write(f"bazi.js: {len(files['bazi_js'])} bytes\n")
    f.write(f"tarot.js: {len(files['tarot_js'])} bytes\n")
    f.write(f"app.js: {len(files['app_js'])} bytes\n")
    f.write(f"HTML output: {len(html)} bytes\n")
    f.write("Build complete!\n")

print("Build successful!")