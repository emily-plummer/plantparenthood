const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');
const Plant = require('./api/models/plantModel');


const app = express();
const port = 8000;

mongoose.Promise = global.Promise;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect(db.url, {
  useMongoClient: true
});

var dbae = mongoose.connection;
dbae.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/plantRoutes');
routes(app); //registering the routes

app.listen(port);

console.log(`server started on port ${port}`);
