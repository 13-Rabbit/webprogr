const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raccoonSchema = new Schema({
  value:Number,
  width:Number,
  height:Number,
  color:String
});

const Raccoon = mongoose.model("raccoon",raccoonSchema);

module.exports = Raccoon;
