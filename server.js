const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');
const Plant = require('./api/models/plantModel');


const app = express();
const port = 8000;

mongoose.Promise = global.promise;
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/plantRoutes');
routes(app); //registering the routes

app.listen(port);

console.log(`server started on port ${port}`);
