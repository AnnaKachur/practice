# Cheat Sheet
## Terminal
### Basics
Show current location - print working directory
```sh
pwd
```
Go to a different folder
```sh
# Go to a folder in the current directory
cd <folder_name>
# Go to parent folder
cd ..
```
List files and folders in a directory - list
```sh
ls
```
Create a file
```sh
touch <file_name>
```
Create a folder/directory - make directory
```sh
mkdir <folder_name>
```
Change a folder or file name
```sh
mv <folder_name> <new_folder_name>
```

## Git
### Basics
Basic workflow
```sh
# Add files with changes to the staging area
git add <file_name>
# Save changes locally in git with selected files and a comment 
git commit -m "Meaningful comment"
# Push changes to the remote repository
git push
```