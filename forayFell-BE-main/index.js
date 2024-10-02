const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
// mongodb+srv://backend-tour:3xATRD91TfyzeQ0H@cluster0.u52es.mongodb.net/?retryWrites=true&w=majority
// const uri = "mongodb+srv://admin:admin@cluster0.dirqjp8.mongodb.net/test";
const uri = "mongodb://127.0.0.1/test"
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))
const db = require("./models");
const Role = db.role;
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    initial()
    console.log("connected to MongoDB");
  }
  catch (error) {
    console.log(error);
  }
}

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

connect();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tour application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/tour.routes')(app);
require('./routes/bookings.routes')(app);

app.listen(5000, () => {
  console.log("server started on port 5000");
});

// https://www.bezkoder.com/node-js-mongodb-auth-jwt/