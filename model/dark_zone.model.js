const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = require("../config/db");

const { Schema } = mongoose;

const darkZoneSchema = new Schema({
  user: String,
  geolocationCoordinates: [Number],
  likes: Number,
});


const userModel = db.model("darkZone", darkZoneSchema);

module.exports = userModel;
