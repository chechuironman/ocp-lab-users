const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config/keys');
let middleware = require('./middleware');
const courses = require("./routes/api/users");
const mongoose = require("mongoose");
const pino = require('pino');
const expressPino = require('express-pino-logger');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const expressLogger = expressPino({ logger });
function main () {
  let app = express(); 
  const port = process.env.PORT || 3000;
 
  var cors=require('cors');
  app.use(expressLogger);
  app.options('*', cors());
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use("/api/users", courses);

  const db = require("./config/keys").mongoURI;
  // Connect to MongoDB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected for USERS SERVICE"))
    .catch(err => console.log(err));
  console.log(db);
//   app.get('/api/management/courses', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();