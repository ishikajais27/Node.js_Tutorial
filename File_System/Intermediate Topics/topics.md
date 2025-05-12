Working with Directories

fs.mkdir() / fs.mkdirSync() (create directories)

fs.readdir() / fs.readdirSync() (list directory contents)

fs.rmdir() / fs.rmdirSync() (remove directories)

File Stats (Metadata)

fs.stat() / fs.statSync()

Stats object properties (e.g., isFile(), isDirectory(), size, mtime)

File Streams

fs.createReadStream() (for large files)

fs.createWriteStream()

Handling stream events (data, end, error)

Appending to Files

fs.appendFile() / fs.appendFileSync()

Renaming/Moving Files

fs.rename() / fs.renameSync()

Copying Files

Manual copy using streams or fs.copyFile() (Node.js 8.5+)

Path Manipulation with path Module

path.join(), path.resolve(), path.basename(), etc.

File Permissions

fs.chmod() / fs.chmodSync()

fs.chown() / fs.chownSync()

Watching Files/Directories

fs.watch() (cross-platform file watcher)

Error Handling in fs Operations

Handling ENOENT, EACCES, etc.

File Flags

Understanding flags like 'a', 'w', 'r+', 'wx', etc.
