const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const placeSchema = new Schema({
    name: String,
    location: {lng:Number,lat:Number},
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  });
  
  const Place = mongoose.model("Place", placeSchema);
  
  module.exports = Place;