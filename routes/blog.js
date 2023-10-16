const express = require('express')
const router = express.Router()
const blogModel = require('../models/blog')

// Get all tabs data
// router.get('/api/all', async (req, res) => {
//     try {
//         const tabs = await blogModel.find();
//         res.json(tabs);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Create a new tab
router.post('/', async (req, res) => {
    const blog = new blogModel({
        title: req.body.title,
        summary: req.body.summary,
        link: req.body.link,
        tags: req.body.tag
    })
    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
});


module.exports = router