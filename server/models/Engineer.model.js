const mongoose = require('mongoose');

const engineerSchema = new mongoose.Schema({
    skills: {
        type: [String],
        required: true
    },
    status: {
        enum: ['available', 'partial', 'onBench']
    },
}, 
{
    timestamps: true
})

const Engineer = mongoose.model('Engineer', engineerSchema)
module.exports = Engineer