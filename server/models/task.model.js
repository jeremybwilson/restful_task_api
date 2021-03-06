const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema
// const TaskSchema = new Schema ({
//     task: {
//         type: String,
//         required: [true, 'Task description is required'],
//         trim: true,
//     },
// }, {timestamps: true});

const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please give your task a title"],
        trim: true,
    },
    description: {
        type: String,
        default: "",
        required: [true, 'Task description is required'],
        trim: true,
    },
    completed: {
        type: String,
        default: false,
        required: [true, 'Completion status is required'],
        trim: true,
    },
}, {timestamps: true});

// const Task = mongoose.model('Task', TaskSchema);
module.exports = mongoose.model('Task', TaskSchema);
