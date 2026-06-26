#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

echo "=== Reinitializing Git & Force Pushing Clean Commit ==="

# 1. Remove the old .git configuration
rm -rf .git

# 2. Initialize a fresh git repository
git init
git checkout -b main

# 3. Link to the GitHub remote repository
git remote add origin https://github.com/Prathamesh123KPM/Mineral-Water-Business.git

# 4. Stage all files (this will automatically ignore node_modules and dist thanks to .gitignore)
git add .

# 5. Create a clean initial commit
git commit -m "Initial commit"

# 6. Force push the clean commit to GitHub
git push -u origin main --force

echo "=== Success! Git push completed successfully ==="
