const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    try {
        // TODO work on this next
        const apiKey = process.env.API_KEY;
        // TODO the "sol" determines the data coming back. Customise this? Randomise? Make it an option to pass in?
        const nasaApiResponse = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`);
        const photos = nasaApiResponse.data.photos[0]; // TODO randomise obj it returns rather than hard coding to 0

        const name = photos.camera.full_name;
        const date = photos.earth_date;
        const img = photos.img_src;
        
        const response = {
            name,
            date,
            img,
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send('Cannot find image');
    }
});

module.exports = router;