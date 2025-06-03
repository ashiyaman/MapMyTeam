const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['not started', 'in progress', 'completed', 'on hold', 'cancelled'],
        default: 'not started'
    },
    techStack: {
        type: [String],
        required: true
    }
},
    {timestamps: true}
)

const Project = mongoose.model('Project', projectSchema)
module.exports = Project