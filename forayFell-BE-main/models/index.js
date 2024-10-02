const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.tour=require("./tour.modal");
db.bookings=require("./bookings.model")

db.ROLES = ["user", "admin"];

module.exports = db;