const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movilSchema = new Schema({
  

  brand: { type: String }, 
  model: { type: String },


});

const Movil = mongoose.model('Movil', movilSchema);
module.exports = Movil;