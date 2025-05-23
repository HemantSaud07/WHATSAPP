const mongoose = require("mongoose");


const chatSchema = new mongoose.Schema({
    from :{
        type:String,
        required:true,

    }, 

     to :{
        type: String,
        required: true,
     },

     message :{
        type: String,
        maxlebgth:1000,
     },

     created_at :{
        type: Date,
        required: true,
     },

});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
