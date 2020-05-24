const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const echidnaSchema = new Schema({
  value:Number,
  width:Number,
  height:Number,
  color:String
});

const Echidna = mongoose.model("echidna",echidnaSchema);

module.exports = Echidna;
