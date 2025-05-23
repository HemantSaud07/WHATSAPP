const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override"); //run put and delete method
app.use(express.json());


app.use(express.urlencoded({extended:true})); //midleware of post request to parse the data from the form req.body
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method")); //use method override to use put and delete method




main ()
.then(() => {
    console.log("connected to database")
}) .catch ((err) => console.log(err));


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")

}
 

// index route

app.get("/chats", async ( req, res ) => {
    let chats =  await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})
 
// home route
 app.get("/", (req,res) =>{
     res.send("the root route is working successfully");


    });

// create chat route
app.get("/chats/new" , (req ,res) => {
    res.render("newChat.ejs");
});
// create chat post route
app.post("/chats", (req, res) => {
    let{ from, to, message } = req.body;
    let newChat = new Chat({
        from:from,

        to:to,
        message:message,
        created_at: new Date()
    });
    newChat.save() .then ( res => {
        console.log("Chat created successfully");
    }) .catch ( err => {
        console.log("Error creating chat", err);
    })
     res.redirect("/chats");
});

//edit chat route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params; // search the id form dabase
    let chat = await Chat.findById(id); // find the chat by id
    if (!chat) {
        return res.status(404).send("Chat not found");
    }
    res.render("edit.ejs", { chat }); // render the edit chat page
});

// update chat route
 app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let {message:newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate  (
        id,
         { message: newMsg },
         { runValidators: true, new: true } // run validators to validate the data


        );
        console.log(updatedChat);
        if (!updatedChat) {
            return res.status(404).send("Chat not found");
        }
        res.redirect("/chats");
       });
    

  



// delete chat route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    if (!deletedChat) {
        return res.status(404).send("Chat not found");
    }
    res.redirect("/chats");
});


//server listening at port 3001

app.listen(3001,() => {
    console.log (" server is listening on the port 3001")
});

