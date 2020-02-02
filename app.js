const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config/keys');
let middleware = require('./middleware');
const courses = require("./routes/api/users");
const mongoose = require("mongoose");

function main () {
  let app = express(); 
  const port = process.env.PORT || 3000;
 
  var cors=require('cors');

  app.options('*', cors());
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  app.use("/api/users", users);
  app.use("/api/backend", backend);
  app.use("/api/management", management);

  app.use("/api/users", courses);

  const db = require("./config/keys").mongoURI;
  // Connect to MongoDB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
  console.log(db);
//   app.get('/api/management/courses', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}

main();