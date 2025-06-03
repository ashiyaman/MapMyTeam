const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    assignedEngineers: {
        type: mongoose.Schema.ObjectId,
        ref: 'Engineer',
        required: true
    },
    assignedProject: {
        type: mongoose.Schema.ObjectId,
        ref: 'Project',
        required: true
    },
    hoursAllocated: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

const Assignment = mongoose.model('Assignment', assignmentSchema)
module.exports = Assignment