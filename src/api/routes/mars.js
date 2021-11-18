const express = require('express');

const router = express.Router();
const axios = require('axios');

const apiKey = process.env.API_KEY;

router.get('/', async (req, res) => {
  try {
    let dateFromRequest = new Date(req.query.date);
    dateFromRequest = dateFromRequest.toISOString().substring(0, 10);
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateFromRequest}&api_key=${apiKey}`;
    const nasaApiResponse = await axios.get(url);

    const { photos } = nasaApiResponse.data;
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
        sol: photo.sol,
        img: photo.img_src,
        rover: {
          landingDate: photo.rover.landing_date,
          launchDate: photo.rover.launch_date,
          status: photo.rover.status,
        },
      };
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(404).send('Cannot find image');
  }
});

module.exports = router;
