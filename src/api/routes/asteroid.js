const express = require('express');

const router = express.Router();
const axios = require('axios');
const { processAsteroidData, checkDateIsValid, calculateDangerScore } = require('../asteroidHelper');

const apiKey = process.env.API_KEY;

router.get('/', async (req, res) => {
  try {
    const dateFromRequest = new Date(req.query.date);
    const formattedDate = checkDateIsValid(dateFromRequest).toISOString().substring(0, 10);
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`;
    const response = await axios.get(url);
    const spaceObjects = response.data.near_earth_objects[formattedDate];
    const asteroidArray = processAsteroidData(spaceObjects);
    const dangerousCount = asteroidArray.filter((asteroid) => asteroid.hazardous).length;
    const dangerScore = calculateDangerScore(spaceObjects.length, dangerousCount);
    const asteroidBody = {
      totalNumber: spaceObjects.length,
      totalDangerousNumber: dangerousCount,
      dangerScore,
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

module.exports = router;
