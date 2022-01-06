const express = require('express')
const router = express.Router()
const helpers = require('../helpers/index');
const Dna = require('../models/Dna');

// Execute DNA Test
router.post('/mutation', async (req, res) => {

    let array = req.body.dna

    const validation = await helpers.validateEntry(array)
    console.log( validation );
    const check = await helpers.hasMutation(array)
    console.log( check )

    if ( !validation ) {
        res.status(422).json({ result: "invalid input" })
    } else {
        if ( check ) {
            helpers.storeDna( array, 1 )
            res.status(200).json({ result: "mutation found" })
        } else {
            helpers.storeDna( array, 0 )
            res.status(403).json({ result: "no mutations found" })
        }   
    }

    

    

});

// Stats
router.get('/dna', async (req, res) => {

    try {
        const dnaRecords = await Dna.find()
        res.status(200).json(dnaRecords)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

});


module.exports = router