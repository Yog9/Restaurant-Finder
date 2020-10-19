# Restaurant Finder

 ![](/demo.gif)

### Features

* Add a restaurant
* Delete a restaurant
* Add a review for restaurant
* Update details of restaurant

### Usage

ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to remove `"type": "module",` from package.json. And use require syntax to import the module.

For Example `const express = require('express')`

### Env Variables

Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
```

### Install Dependencies (frontend & backend)
```
npm install
cd frontend
npm install
```

### Run
```
# Run both frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Seed Database

You can use the following commands to seed the database with some sample restaurants as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

