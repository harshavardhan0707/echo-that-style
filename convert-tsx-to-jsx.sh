#!/bin/bash

# Script to convert remaining TSX files to JSX

# If a file path is provided, convert only that file
if [ -n "$1" ]; then
  if [ -f "$1" ] && [[ "$1" == *.tsx ]]; then
    newFile="${1%.tsx}.jsx"
    echo "Converting $1 to $newFile..."
    
    # Create JSX file with the same content but without TypeScript types
    sed -E 's/<[^<>]*>//g' "$1" | \
    sed 's/: React\.[^,}=]*//g' | \
    sed 's/: [a-zA-Z<>]*//g' > "$newFile"
    
    echo "Conversion completed. Please review $newFile and adjust as needed."
    
  else
    echo "Error: $1 is not a valid .tsx file"
    exit 1
  fi
else
  echo "Converting all remaining TSX files..."
  
  # Find all TSX files and convert them
  find ./src -name "*.tsx" -print0 | while IFS= read -r -d $'\0' file; do
    newFile="${file%.tsx}.jsx"
    echo "Converting $file to $newFile..."
    
    # Create JSX file with the same content but without TypeScript types
    sed -E 's/<[^<>]*>//g' "$file" | \
    sed 's/: React\.[^,}=]*//g' | \
    sed 's/: [a-zA-Z<>]*//g' > "$newFile"
  done
  
  echo "Conversion completed. Please review the new JSX files and adjust as needed."
fi
