const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
});

// Data model is the representation for the collection
module.exports = mongoose.model('Task', TaskSchema);