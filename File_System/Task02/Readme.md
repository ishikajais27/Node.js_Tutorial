Task->
File System Project:

Build a command-line tool that:
1- Reads a directory and lists all files.
2- Copies all .txt files from one folder to another.
3- Logs the number of files copied.

1-> we create a folder of name task1 and then some files in it to performe 1q.
2-> create another folder of Task02 get its path using **dir and sourceFolder path means Task01 path using path module
path.resolve(**dirname,..(to come out from current folder),(and the folder name)Task01)
and then we check if source folder exsist or not using fs.exsist and then read the dir of source folder to get the files in it and then pass forEach loop to get single files conatnt and then get the filepath and then copy using fs.copyFile\
and then find numebr of files copy using files.length
so we complete all three task here!!
