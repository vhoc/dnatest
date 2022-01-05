const express = require('express')
const router = express.Router()
const helpers = require('../helpers/index')

// Execute DNA Test
router.post('/', async (req, res) => {

    //let dnaArray = ["ATGCGA","GAGTGC","AAAAGT","AGAAGG","CCCCTA","TCACTG"]
    //let nomut = ["ATGCGA","GAGTGC","AAACGT","AGAAGG","CGCCTA","TCACTG"]
    //onsole.log(req)
    let array = req.body.dna

    const check = helpers.hasMutation(array)

    if ( check ) {
        res.status(200).json({ result: "mutation found" })
    } else {
        res.status(403).json({ result: "no mutations found" })
    }

    

})

module.exports = router