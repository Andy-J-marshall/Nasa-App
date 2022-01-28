const { expect } = require('chai');
const axios = require('axios');

const marsUrl = 'http://localhost:9000/mars';

describe('Mars API integration test', async () => {
    it('Mars image is not returned when using today\'s date', async () => {
        const options = {
            params: { date: new Date() },
            method: 'get',
            url: marsUrl,
        }
        const response = await axios.request(options);
        expect(response.status).to.equal(200);
        const responseBody = response.data;
        expect(responseBody).to.include.all.keys('imageFound');
        expect(Object.keys(responseBody)).to.have.length(1);
        expect(responseBody.imageFound).to.equal(false);
    });

    it('Mars image is returned when date is in the past', async () => {
        const options = {
            params: { date: new Date('2021-12-17') },
            method: 'get',
            url: marsUrl,
        }
        const response = await axios.request(options);
        expect(response.status).to.equal(200);
        const responseBody = response.data;
        expect(responseBody).to.include.all.keys('imageFound', 'name', 'sol', 'img', 'rover');
        expect(Object.keys(responseBody)).to.have.length(5);
        expect(responseBody.imageFound).to.equal(true);
        expect(responseBody.name).to.be.a('string');
        expect(responseBody.sol).to.be.a('number');
        expect(responseBody.img).to.be.a('string');
        expect(responseBody.img).to.have.string('https://mars.nasa.gov/');
        expect(responseBody.rover).to.be.an('object');
        expect(responseBody.rover.landingDate).to.be.a('string');
        expect(responseBody.rover.launchDate).to.be.a('string');
        expect(responseBody.rover.status).to.be.a('string');

        const landingDate = new Date(responseBody.rover.landingDate);
        expect(landingDate).to.be.a('date');
        const launchDate = new Date(responseBody.rover.launchDate);
        expect(launchDate).to.be.a('date');
    });
});
