const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    try {
        const date = new Date(req.query.date);
        const formattedDate = date.toISOString().substring(0, 10);
        // TODO change key to environment config?
        const apiKey = ''; // TODO pass in as env variable
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`);
        const spaceObjects = response.data.near_earth_objects[formattedDate];

        const asteroidArray = [];
        spaceObjects.forEach(asteroid => {
            const minDiam = asteroid.estimated_diameter.meters.estimated_diameter_min;
            const maxDiam = asteroid.estimated_diameter.meters.estimated_diameter_max;
            const averageDiam = ((maxDiam * minDiam) / 2).toFixed(2);
            const asteroidInfo = {
                name: asteroid.name,
                hazardous: asteroid.is_potentially_hazardous_asteroid,
                diameterInMetres: averageDiam,
                missDistanceInKm: (asteroid.close_approach_data[0].miss_distance.kilometers * 1).toFixed(2),
                velocityKmpH: (asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour * 1).toFixed(2)
            };
            asteroidArray.push(asteroidInfo);
        });

        const dangerousCount = asteroidArray.filter(asteroid => asteroid.hazardous).length;
        const asteroidBody = {
            totalNumber: spaceObjects.length,
            totalDangerousNumber: dangerousCount,
            asteroids: asteroidArray,
        };

        res.send(asteroidBody);
    } catch (error) {
        res.status(400).send('Cannot find information'); // TODO Make sure app handles the error state
    }
});

module.exports = router;
