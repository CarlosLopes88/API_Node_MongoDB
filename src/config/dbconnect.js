import mongoose from "mongoose";

mongoose.connect("mongodb+srv://your_user:your_secretkey@your_database.ikoyakg.mongodb.net/?retryWrites=true&w=majority&appName=your_database");

let db = mongoose.connection;

export default db;