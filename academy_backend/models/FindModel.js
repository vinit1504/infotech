const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FindSchema = new Schema({
    name:{
        type:String
    }
})
module.exports = mongoose.model("Find",FindSchema)