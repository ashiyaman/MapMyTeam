const mongoose = require('mongoose');
const express = require('express')
const initializeDatabase = require('./db/db.connect');
const cors = require('cors')
const PORT = process.env.port || 3000

const app = express()
app.use(express.json())
app.use(cors())

initializeDatabase()

app.get('/', (req, res) => {
    try {
        res.send("Welcome to MapMyTeam")
    }
    catch(error){
        console.log("Error while connecting to the server:", error)
        res.status(500).send("Internal Server Error")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 