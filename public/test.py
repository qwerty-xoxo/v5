files = []

import os 

# for every file in /public/scripts add it to the list

for file in os.listdir("public/scripts"):
    if file.endswith(".js"):
        files.append(file)


# for every file in /public ( not including subfolders) replace all instances with "scripts/file" to update them

for file in os.listdir("public"):
    with open(f"public/{file}", "r") as f:
        content = f.read()
        for file in files:
            content = content.replace(f"{file}", f"scripts/{file}")
    with open(f"public/{file}", "w+") as f:
        f.write(content)