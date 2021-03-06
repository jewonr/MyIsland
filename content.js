const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    title: {
        type: String
    },

    text: {
        type: String
    },

    imgName: {
        type: String
    },

    boxSize: {
        type: String
    },

    createAt: {
        type: Date,
        default: Date.now
    },

    creater: {
        type: String,
        required: true,
        ref: 'User' 
    },

    section: {
        type: String,
        required: true
    }
});

const content = mongoose.model('Content', ContentSchema);

module.exports = content;