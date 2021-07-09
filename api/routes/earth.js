const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    try {
        const apiKey = '';  // TODO pass in as env variable
        const response = await axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=${apiKey}`);
        res.send(response.data);
    } catch (error) {
        res.status(400).send('Cannot find image');
    }
});

module.exports = router;