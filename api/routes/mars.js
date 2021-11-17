const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.API_KEY;

router.get('/', async function (req, res, next) {
    try {
        // TODO pass in dates in the correct format rather than changing here? Create a shared function to do so? Same with asteroid api
        let reqDate = new Date(req.query.date);
        reqDate = reqDate.toISOString().substring(0, 10);
        const nasaApiResponse = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${reqDate}&api_key=${apiKey}`);

        const photos = nasaApiResponse.data.photos;
        const numberOfPhotos = photos.length;
        if (numberOfPhotos < 1) {
            res.status(200).send({
                imageFound: false,
            });
        } else {
            const photoIdToReturn = Math.floor(Math.random() * numberOfPhotos) + 1;
            const photo = photos[photoIdToReturn];
            const response = {
                imageFound: true,
                name: photo.camera.full_name,
                sol: photo.sol, // Martian rotation or day on it was taken, counting up from the rover's landing date
                img: photo.img_src,
                rover: {
                    landingDate: photo.rover.landing_date,
                    launchDate: photo.rover.launch_date,
                    status: photo.rover.status,
                },
            }
            res.status(200).send(response);
        }
    } catch (error) {
        res.status(404).send('Cannot find image');
    }
});

module.exports = router;