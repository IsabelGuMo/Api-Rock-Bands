const express = require("express");
const router = express.Router();
const bandsSchema = require('../models/bands.model');

router.route('/bands').get((req, res) => {
    bandsSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})


router.post('/bands', (req, res, next) => {
    const band = new bandsSchema({
        name: req.body.name,
        description: req.body.description,
        origin: req.body.origin,
        yearsActive: req.body.yearsActive
    });
    band.save().then((response) => {
        res.status(201).json({
            message: "band successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;