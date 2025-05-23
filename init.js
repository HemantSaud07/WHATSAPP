const mongoose = require("mongoose");
const Chat = require("./models/chat");


main ()
.then(() => {
    console.log("connected to database")
}) .catch ((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")

}


 // insert chat in models/chat.js
 let allChats=([
    {
    from : "Prince",
    to :"Harichandra",
    message:"Send me the old papers of 6 Semester if you have",
    created_at: new Date()
    },
    {
    from : "Bhawana Ayer",
    to :"Harichandra",
    message:"i love you",
    created_at: new Date()
    },
    {
    from : "Chattra Bhora",
    to :"Harichandra",
    message:"where Are you bro, i need your help",
    created_at: new Date()
    },

    {
    from : "Prince",
    to :"Madhav Khatri",
    message:"hello my Dost ,k xa kbr ,aja Katai ghumna jau na tw",
    created_at: new Date()
    },
    {
    from : "Prince",
    to :"Dhipak Dhanuk",
    message:"  kata ho sir ,paisha ko kami vaya samjhenu hola hoi tw",
    created_at: new Date()
    },
    {
    from : "Pooja Khadka",
    to :"Jagat Joshi",
    message:"helo jagat dai, k xa kbr",
    created_at: new Date()
    },
    {
    from : "Prince",
    to :"Pooja Khadka",
    message:"Sk chha maiyaa ,aja voli tw sms ,call ne garnu chainna",
    created_at: new Date()
    },
    {
    from : "Prince",
    to :"Rana",
    message:"babay plz call garana na kasto temro face herna maan xa",
    created_at: new Date()
    },

 ]);
// save the chat to the database
Chat.insertMany(allChats)
.then(() => { 
    console.log("chat saved successfully");


}) .catch((err) => {
    console.log("error in saving chat", err);


});
  



 