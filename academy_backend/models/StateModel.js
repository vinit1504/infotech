const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    name:{
        type:String
    }
})
module.exports = mongoose.model("State",StateSchema)