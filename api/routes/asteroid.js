const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async function (req, res, next) {
    try {
        const dateFromRequest = new Date(req.query.date);
        const formattedDate = checkDateIsValid(dateFromRequest).toISOString().substring(0, 10);
        const response = await nasaGetAsteroidRequest(formattedDate);

        const spaceObjects = response.near_earth_objects[formattedDate];
        const asteroidArray = processAsteroidData(spaceObjects);
        const dangerousCount = asteroidArray.filter(asteroid => asteroid.hazardous).length;
        const asteroidBody = {
            totalNumber: spaceObjects.length,
            totalDangerousNumber: dangerousCount,
            asteroids: asteroidArray,
        };

        res.send(asteroidBody);
    } catch (error) {
        const statusCode = error.response.status;
        if (statusCode === 403) {
            res.status(403).send('NASA API key is invalid. Update your local environment variable');
        } else {
            res.status(400).send('Error retrieving Asteroid data from NASA');
        }
    }
});

async function nasaGetAsteroidRequest(date) {
    const apiKey = process.env.API_KEY;
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`);
    return response.data;
}

function processAsteroidData(spaceObjects) {
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
    return asteroidArray;
}

function checkDateIsValid(date, acceptedDateRangeInYears = 20) {
    let selectedDate = date;
    if (Object.prototype.toString.call(selectedDate) !== '[object Date]') {
        selectedDate = new Date();
        console.log('Invalid date, setting to today instead');
    }

    const earliestDate = new Date();
    earliestDate.setHours(1, 0, 0, 0);
    const latestDate = new Date();
    latestDate.setHours(24, 59, 59, 999);
    const earliestDateInt = earliestDate.setYear(earliestDate.getFullYear() - acceptedDateRangeInYears);
    const latestDateInt = latestDate.setYear(latestDate.getFullYear() + acceptedDateRangeInYears);

    selectedDate.setHours(1, 0, 0, 0);
    const dateInt = selectedDate.getTime();
    if (dateInt < earliestDateInt || dateInt > latestDateInt) {
        selectedDate = new Date();
        console.log('Selected date outside the accepted range, setting to today instead');
    }
    return selectedDate;
}

module.exports = router;
