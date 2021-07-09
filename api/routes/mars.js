const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    try {
        res.send('Mars test');
    } catch (error) {
        res.status(400).send('Cannot find weather');
    }
});

module.exports = router;