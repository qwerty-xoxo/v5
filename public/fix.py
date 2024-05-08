
file = "load_apps.js"

with open(file) as f:
    content = f.read()

content=content.replace("onclick=\"localStorage.setItem(","onclick=\"localStorage.setItem('url',")


# Write the modified HTML back to the file
with open(file, "w") as f:
    f.write(content)

print("done")
