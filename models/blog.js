const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    tags: {
        type: Array,
        required: true,
        default: []
    }
})

module.exports = mongoose.model('Blog', blogSchema)