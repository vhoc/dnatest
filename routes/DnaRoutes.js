const express = require('express')
const router = express.Router()

// Execute DNA Test
router.post('/', async (req, res) => {
    res.status(200).json({ node: 'value' })
})

module.exports = router