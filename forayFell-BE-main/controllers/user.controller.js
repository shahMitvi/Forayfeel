const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.getUsers = (req, res) => {
  User.find()
    .populate("roles", "-__v")
    .exec((err, users) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log(users[0].roles)
      let users_data = users.filter((user) => user.roles[0]['name']=="user");
      res.status(200).send(users_data);
    });
};
exports.getAdmins = (req, res) => {
    User.find()
      .populate("roles", "-__v")
      .exec((err, users) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log(users[0].roles)
        let users_data = users.filter((user) => user.roles[0]['name']=="admin");
        res.status(200).send(users_data);
      });
  };