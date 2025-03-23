CONNECT MONGODB WITH NODEJS->

Step 1: Install MongoDB Driver -> npm install mongodb
Step 2: Setup server.js-> get the mongoDB url from cmd ,then get the db name which you want to fetch or manipulate
make a object through which you can use db using(new MongoDBClien(pass the mongo url)) and then connect to the database using .connect(), select the database using .db(pass the dabatase name you want to select)

MongoClient which we import form mongoDB module is a class which helps to connect mongDB server and interact with database.
const client = new MongoClient(mongoURL)-> makes a client object use to connect momngoDB server and perform operations

TASK01->
Node.js + MongoDB Project:
Build a "Library Management System" using Node.js and MongoDB.
Endpoints:
POST /books → Add a new book.
GET /books → Get all books.
GET /books/:id → Get a book by ID.
PUT /books/:id → Update a book's details.
DELETE /books/:id → Delete a book.
