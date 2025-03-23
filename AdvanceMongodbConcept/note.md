Day 5: Advanced MongoDB Concepts
Focus:
Learn advanced MongoDB features: indexing, aggregation, and relationships.
Task01:
Indexing Project:
Create an index on the year field in the books collection.
Measure the performance difference when querying with and without the index.

Indexes in MongoDB improve query performance by allowing faster lookups. Without indexes, MongoDB scans the entire collection (called a collection scan) to find documents.

1 Create an Index
Use createIndex() to add an index.

Create a Single-Field Index
db.books.createIndex({ title: 1 }) // Index on `title` in ascending order
Now, queries using title (e.g., find({ title: "MongoDB Guide" })) will be faster.

2 Check Existing Indexes
Use getIndexes() to list all indexes in a collection.

db.books.getIndexes()
3 Compound Index (Multiple Fields)
You can create an index on multiple fields.

db.books.createIndex({ title: 1, author: -1 }) // Title ascending, Author descending
Helps when querying both title and author together.

4 Unique Index
Prevent duplicate values in a field.

db.books.createIndex({ isbn: 1 }, { unique: true })
Now, two books cannot have the same isbn.

5 Text Index (For Searching Text)
To enable full-text search, create a text index.

db.books.createIndex({ description: "text" })
Now, you can search using:

db.books.find({ $text: { $search: "MongoDB" } })
6️ Delete an Index
Use dropIndex() to remove an index.

db.books.dropIndex("title_1") // Drop index on `title`

7️ Check Query Performance
Use explain("executionStats") to check if an index is used.

db.books.find({ title: "MongoDB Guide" }).explain("executionStats")
If the "stage": "IXSCAN" appears, the index is used.
If "stage": "COLLSCAN", MongoDB is scanning all documents (bad for performance).
