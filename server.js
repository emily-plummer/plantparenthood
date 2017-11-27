const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');
const Plant = require('./api/models/plantModel');
const path = require('path');


const app = express();
const port = process.env.PORT || 8000;
app.listen(port);
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(db.url)
  .then(() => console.log('CONNECTED!'))
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

var routes = require('./api/routes/plantRoutes');
routes(app); //registering the routes

//app.use(express.static(path.join(__dirname, 'app/build')));
