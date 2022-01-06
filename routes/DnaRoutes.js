const express = require('express')
const router = express.Router()
const helpers = require('../helpers/index');
const Dna = require('../models/Dna');

router.post('/mutation', async (req, res) => {

    let array = req.body.dna;
    //console.log(array);

    const validation = await helpers.validateEntry(array)

    const check = await helpers.hasMutation(array)

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

// DNA records list
router.get('/dna', async (req, res) => {

    try {
        const dnaRecords = await Dna.find()
        res.status(200).json(dnaRecords)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

});

// Stats
router.get('/stats', async (req, res) => {

    const mutations = await Dna.find().select('mutation -_id');
    let mutationValues = [];

    mutations.forEach(value => {
        mutationValues.push(value);
    })

    console.log(mutationValues);

    res.status(200).json(mutations);

})


module.exports = router