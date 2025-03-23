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

---

Now lets understand how all this works
SO 1st we try to connect the mongoDB with the help of a class(MongoClient) which imported from mongodb.
Then we create an asynchronous function to connect the mongodb and access db,collections.
in async 1st get the url of mongodb,then dbname with the and collection and return the collections
And now perform tasks according to requests and methods

So 1st task is to Post a new book(add new book to collection) -> Get the body and then in end event pass an async function convert the data into JSON and the add it using .insertOne

Next method is GET use try and catch -> try find all datas using await collectionName.find()

Next method is GET but here we have to find specific data by passing id so here 1st get the id using url.split and then convert id to objectId and then find the data

Next method is PUT here we want to update data according to the id so 1st lets get teh body then in end event pass async function and in it get the id convert it to ObjectId and then update using $set operator

And last on is DELETE here similarly in try get id convert it and then delete it using deleteOne
