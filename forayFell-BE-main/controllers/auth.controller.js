const config = require("../config/auth.config");
const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = db.user;
const Role = db.role;

exports.signup = async (req, res) => {
  try {
    console.log(req);
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    await user.save();

    let role = null;

    // if (req.body.roles) {
    //   role = await Role.findOne({ name: "admin" });
    // } else {

    // }
    role = await Role.findOne({ name: "user" });

    user.roles = [role._id];
    await user.save();

    return res
      .status(200)
      .send({ message: "User was registered successfully!" });
  } catch (err) {
    console.log("error", err);
    return res.status(500).send({ message: "errr" });
  }
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      var authorities = [];
      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      return res.status(200).send({
        id: user._id,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    });
};
