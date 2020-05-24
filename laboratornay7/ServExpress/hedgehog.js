const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hedgehogSchema = new Schema({
  value:Number,
  width:Number,
  height:Number,
  color:String
});

const Hedgehog = mongoose.model("hedgehog",hedgehogSchema);

module.exports = Hedgehog;
