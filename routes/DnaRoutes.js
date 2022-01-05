const express = require('express')
const router = express.Router()
const helpers = require('../helpers/index');
const Dna = require('../models/Dna');

// Execute DNA Test
router.post('/mutation', async (req, res) => {

    let array = req.body.dna

    const check = helpers.hasMutation(array)

    if ( check ) {
        res.status(200).json({ result: "mutation found" })
    } else {
        res.status(403).json({ result: "no mutations found" })
    }   

});

// Stats
router.get('/stats', async (req, res) => {

    try {
        const dnaRecords = await Dna.find()
        res.status(200).json(dnaRecords)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

});


module.exports = router