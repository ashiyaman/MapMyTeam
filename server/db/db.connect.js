const mongoose = require('mongoose');
require('dotenv').config()

const mongoURL = process.env.MONGODB_URL

console.log("MongoDB URL:", mongoURL);

const initializeDatabase = async() => {
    try {
        await mongoose
        .connect(mongoURL)
        .then(() => console.log('MongoDB connected successfully'))
    } 
    catch(error){
        console.log("MongoDB connection error:", error)
    }
}

module.exports = initializeDatabase