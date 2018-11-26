const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const placeSchema = new Schema({
    name: { type: String, unique: true },
    long: {type: Number},
    lat: {type: Number}
},
    {
        timestamps: {
            createdAt: "createdAt",
        }
    });
 const Place = mongoose.model("Place", placeSchema);
 module.exports = Place; 