const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a task name'],
        trim: true,
        maxlength: [20, "task name can't be more than 20 char"]
    },
    completed: {
        type: Boolean,
        default: false
    },
});

// Data model is the representation for the collection
module.exports = mongoose.model('Task', TaskSchema);