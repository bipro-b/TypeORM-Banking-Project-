# TypeORM Banking Project with PostgreSQL
This is a simple TypeORM project for a banking application using PostgreSQL as the database. The project includes three main routes: clients, bankers, and transactions.


## Routes

## Clients
The clients route includes CRUD operations for clients. Clients have a many-to-one relationship with transactions. Clients can be deleted only if they have no associated transactions.

## Bankers
The bankers route includes CRUD operations for bankers. Bankers have a many-to-many relationship with clients.

## Transactions
The transactions route includes CRUD operations for transactions. Transactions have a many-to-one relationship with clients.


## API EndPoints
GET /api/clients: Get a list of all clients
GET api/clients/:id: Get a single client by ID
POST api/clients: Create a new client
POST api/bankers: Create a new bankers
POST /api/client/1/transaction: Create a new transaction by Clients
PUT  /api/banker/1/client/1 Connect Clients to Bankers
DELETE /clients/:id: Delete a client by ID (if they have no transactions)

## Relationships
The project includes two types of relationships between entities:

## Many-to-One
Transactions have a many-to-one relationship with clients. This means that many transactions can be associated with one client.

## Many-to-Many
Bankers have a many-to-many relationship with clients. This means that a banker can be associated with many clients, and a client can be associated with many bankers.

## Queries
The basic fetch query retrieves all clients and their associated transactions.

The project will run on http://localhost:8080.




