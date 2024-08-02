const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
    type: String,
    required: true,
    min: 3, 
    max: 20,
   },
   email:{
    type: String,
    required: true,
    unique: true,
   },
   phone: {
    type: String,
    require: true,
    unique: true,
    min: 10,
    max: 10,
  },
  state:{
    type:String,
    require: true,
  },
  experience:{
    type:String,
    require:true
  },
  course:{
    type:String,
    required: true,
  },
  find:{
    type:String,
    require:true
  }
})

module.exports = mongoose.model("User",UserSchema)