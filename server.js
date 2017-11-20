const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');
const Plant = require('./api/models/plantModel');


const app = express();
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
const port = process.env.PORT || 8000;
app.listen(port);

console.log(`server started on port ${port}`);
