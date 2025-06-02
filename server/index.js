const mongoose = require('mongoose');
const express = require('express')
const initalizeDatabase = require('./db/db.connect');
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

initalizeDatabase()

app.get('/', (req, res) => {
    try {
        res.send("Welcome to MApMyTeam")
    }
    catch(error){
        console.log("Error while connecting to the server:", error)
        res.status(500).send("Internal Server Error")
    }
})