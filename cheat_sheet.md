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
Move a folder to another folder
```sh
mv <folder to move> <destination>
```
Remove a file
```sh
rm <file_name>
```
Remove a folder
```sh
rm -r <folder_name>
```
### C Language
Compile c code to binary executable
By default it will create an executable with the same name as a file with code
```sh
make <file_name>
```
Run program
```sh
./<file_name>
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
### Commands 
Show status of a branch
```sh
git status
```
Show commits in the branch
```sh
git log
```
Link to the remote repository
```sh
# Necessary for the first git push

# Add link to remote repository
git remote add <local_name> <link_to_repository>
git remote add origin git@github.com:AnnaKachur/practice.git

# Show links to the repositiries
git remote -v
```



## Programming
### C Language
To use double quotes in a string use \ to escape them
```c
printf("Hello \"World\"");
// => Hello "World"
```
To use backslash in a string use \ to escape it
```c
printf("Hello \\World");
// => Hello \World
