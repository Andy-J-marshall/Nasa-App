const { expect } = require('chai');
const axios = require('axios');

const asteroidUrl = 'http://localhost:9000/asteroid';

describe('Asteroid API integration test', async () => {
    it('Asteroid endpoint returns the correct response', async () => {
        const options = {
            params: { date: new Date() },
            method: 'get',
            url: asteroidUrl,
        }
        const response = await axios.request(options);
        expect(response.status).to.equal(200);
        const responseBody = response.data;
        expect(responseBody).to.include.all.keys('totalNumber', 'totalDangerousNumber', 'dangerScore', 'asteroids');
        expect(Object.keys(responseBody)).to.have.length(4);
        expect(responseBody.totalNumber).to.be.an('number');
        expect(responseBody.totalDangerousNumber).to.be.an('number');
        expect(responseBody.totalDangerousNumber).to.be.lessThanOrEqual(responseBody.totalNumber);
        expect(responseBody.dangerScore).to.be.an('number');
        expect(responseBody.asteroids).to.be.an('array');
        if (responseBody.asteroids.length > 0) {
            const firstAsteroid = responseBody.asteroids[0];
            expect(firstAsteroid.hazardous).to.be.an('boolean');
            expect(firstAsteroid.diameterInMetres).to.be.an('string');
            expect(parseInt(firstAsteroid.diameterInMetres)).to.not.be.NaN
            expect(parseInt(firstAsteroid.diameterInMetres)).to.be.greaterThan(0);
            expect(firstAsteroid.missDistanceInKm).to.be.an('string');
            expect(parseInt(firstAsteroid.missDistanceInKm)).to.not.be.NaN
            expect(parseInt(firstAsteroid.missDistanceInKm)).to.be.greaterThan(0);
            expect(firstAsteroid.velocityKmpH).to.be.an('string');
            expect(parseInt(firstAsteroid.velocityKmpH)).to.not.be.NaN
            expect(parseInt(firstAsteroid.velocityKmpH)).to.be.greaterThan(0);
        }
    });
});
