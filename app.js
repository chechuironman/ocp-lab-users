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
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
  app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
  app.use(bodyParser.json());
  // Routes & Handlers
//   app.post('/login', handlers.login);
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