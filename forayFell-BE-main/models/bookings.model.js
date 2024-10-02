const mongoose = require("mongoose");
var SchemaTypes = mongoose.Schema.Types;
const Bookings = mongoose.model(
  "Bookings",
  new mongoose.Schema({
    tour: { type: SchemaTypes.ObjectId, ref: "Tour" },
    user: { type: SchemaTypes.ObjectId, ref: "User" },
    From_date: { type: SchemaTypes.Date },
    to_date: { type: SchemaTypes.Date },
    persons: { type: SchemaTypes.Number },
    amount: { type: SchemaTypes.Number },
    payment_Method: { type: SchemaTypes.String },
    is_payment_completed: { type: SchemaTypes.Boolean },
  })
);

module.exports = Bookings;
