Understanding Events in Node.js
Task
Our goal is to build a simple event emitter that logs a message whenever a file is created, modified, or deleted in a directory.

Step 1: Setting Up the Directory
Start by creating a directory named trial. This is the folder where we will manually create, modify, and delete files to test our event emitter.

Step 2: How It Works
To detect file changes, we will use fs.watch(), which allows us to monitor operations happening inside a folder.
However, just detecting a change isn’t enough—we need to know whether a file was created or deleted.
That’s where fs.access() comes in.

Step 3: Why Use fs.access() Instead of fs.exists()?
fs.access() is more reliable because:

It avoids race conditions, meaning it doesn’t give incorrect results due to quick file operations.
It allows us to check file permissions, which can be useful when dealing with read/write access.
Syntax of fs.access():

javascript
Copy
Edit
fs.access(path, mode, callback);
Here, mode specifies whether we’re checking if the file exists, is readable, or is writable.

Step 4: Implementing the Solution
Use fs.watch() to listen for changes in the directory.
Use fs.access() to check whether a file exists.
Emit events (create, delete, modify) based on what happened.
Listen for these events and log messages to the console.
