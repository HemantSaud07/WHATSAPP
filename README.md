# WhatsApp Chat Clone (Node.js, Express, MongoDB)

A simple WhatsApp-inspired chat web app built with Node.js, Express, MongoDB (Mongoose), and EJS. Users can create, view, edit, and delete chat messages in a modern, styled interface.

## Features
- View all chats in a WhatsApp-like UI
- Create new chat messages
- Edit existing chat messages
- Delete chat messages with confirmation popup
- Responsive and modern design with custom CSS

## Project Structure
```
├── index.js           # Main Express server
├── init.js            # Script to seed the database with sample chats
├── models/
│   └── chat.js        # Mongoose Chat schema/model
├── public/
│   └── index.css      # Custom CSS for styling
│   └── app.js         # JS for delete confirmation popup
├── views/
│   ├── index.ejs      # List all chats
│   ├── newChat.ejs    # Form to create a new chat
│   └── edit.ejs       # Form to edit a chat
└── package.json       # Project dependencies
```

## Setup Instructions
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start MongoDB** (make sure MongoDB is running on your system)
3. **Seed the database with sample chats:**
   ```bash
   node init.js
   ```
4. **Start the server:**
   ```bash
   node index.js
   ```
5. **Open your browser:**
   Visit [http://localhost:3001/chats](http://localhost:3001/chats)

## Usage
- **View Chats:** `/chats` — See all chat messages.
- **Create Chat:** Click "New chat" to add a new message.
- **Edit Chat:** Click "Edit" on any chat to update its message.
- **Delete Chat:** Click "Delete" and confirm to remove a chat.

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript templates)
- CSS (custom, WhatsApp-inspired)

## Notes
- Uses `method-override` for PUT/DELETE requests from forms.
- All chat data is stored in MongoDB (`whatsapp` database).
-  I Designed  this project for learning/demo purposes.



 if you want to enhance this prject with new festures.Feel free to customize and extend this project!
