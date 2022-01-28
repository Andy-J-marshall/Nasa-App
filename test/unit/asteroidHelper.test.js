const { expect } = require('chai');
const { calculateDangerScore, checkDateIsValid, processAsteroidData } = require('../../src/api/asteroidHelper');
const asteroids = require('./asteroidFixtures');

describe('Asteroid Helper unit tests', () => {
    describe('calculateDangerScore', () => {
        it('Danger score is calculated correctly', () => {
            const numberOfAsteroids = 11;
            const numberOfDangerousAsteroids = 3;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(61);
        });

        it('Danger score is cannot go above 100', () => {
            const numberOfAsteroids = 12;
            const numberOfDangerousAsteroids = 6;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(100);
        });

        it('Danger score can be 100 exactly', () => {
            const numberOfAsteroids = 11;
            const numberOfDangerousAsteroids = 6;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(100);
        });

        it('Danger score can be 0', () => {
            const numberOfAsteroids = 0;
            const numberOfDangerousAsteroids = 0;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(0);
        });

        it('Danger score cannot be negative', () => {
            const numberOfAsteroids = -1;
            const numberOfDangerousAsteroids = 0;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(0);
        });

        it('Danger score cannot be negative', () => {
            const numberOfAsteroids = -1;
            const numberOfDangerousAsteroids = 0;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(0);
        });

        it('Danger score cannot be negative', () => {
            const numberOfAsteroids = 1;
            const numberOfDangerousAsteroids = -1;
            const dangerScore = calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids);
            expect(dangerScore).to.equal(0);
        });
    });

    describe('checkDateIsValid', () => {
        const today = new Date();
        today.setHours(1, 0, 0, 0);

        it('Date is calculated correctly when date is today', () => {
            const selectedDate = new Date();
            const returnedDate = checkDateIsValid(selectedDate)
            selectedDate.setHours(1, 0, 0, 0);
            expect(returnedDate.getTime()).to.equal(selectedDate.getTime());
        });

        it('Date is calculated correctly when date is in the past', () => {
            const selectedDate = new Date(2009, 11, 19);
            const returnedDate = checkDateIsValid(selectedDate)
            selectedDate.setHours(1, 0, 0, 0);
            expect(returnedDate.getTime()).to.equal(selectedDate.getTime());
        });

        it('Date is calculated correctly when date is in the future', () => {
            const selectedDate = new Date(2029, 0, 13);
            const returnedDate = checkDateIsValid(selectedDate)
            selectedDate.setHours(1, 0, 0, 0);
            expect(returnedDate.getTime()).to.equal(selectedDate.getTime());
        });

        it('Date set to today when date is outside the default range (past)', () => {
            const selectedDate = new Date(2001, 10, 18);
            const returnedDate = checkDateIsValid(selectedDate)
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Date set to today when date is outside the default range (future)', () => {
            const selectedDate = new Date(2050, 0, 28);
            const returnedDate = checkDateIsValid(selectedDate)
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Date defaults to today when invalid date is passed in', () => {
            const invalidDateFormat = '13/03/2021';
            const returnedDate = checkDateIsValid(invalidDateFormat)
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Date defaults to today when no date is passed in', () => {
            const returnedDate = checkDateIsValid()
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Date set to today when date is outside the default range (past) and the acceptedDateRangeInYears has been specified', () => {
            const selectedDate = new Date(1991, 10, 18);
            const acceptedDateRangeInYears = 30;
            const returnedDate = checkDateIsValid(selectedDate, acceptedDateRangeInYears)
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Date set to today when date is outside the default range (future) and the acceptedDateRangeInYears has been specified', () => {
            const selectedDate = new Date(2060, 10, 18);
            const acceptedDateRangeInYears = 30;
            const returnedDate = checkDateIsValid(selectedDate, acceptedDateRangeInYears)
            expect(returnedDate.getTime()).to.equal(today.getTime());
        });

        it('Past date calculated correctly when the acceptedDateRangeInYears has been specified', () => {
            const selectedDate = new Date(1990, 10, 18);
            const acceptedDateRangeInYears = 40;
            const returnedDate = checkDateIsValid(selectedDate, acceptedDateRangeInYears)
            selectedDate.setHours(1, 0, 0, 0);
            expect(returnedDate.getTime()).to.equal(selectedDate.getTime());
        });

        it('Future date calculated correctly when the acceptedDateRangeInYears has been specified', () => {
            const selectedDate = new Date(2061, 10, 17);
            const acceptedDateRangeInYears = 40;
            const returnedDate = checkDateIsValid(selectedDate, acceptedDateRangeInYears)
            selectedDate.setHours(1, 0, 0, 0);
            expect(returnedDate.getTime()).to.equal(selectedDate.getTime());
        });
    });

    describe('processAsteroidData', () => {
        it('Asteroid information is calculated successfully', () => {
            const expectedAsteroidArray = [
                {
                    name: '(2022 XX11)',
                    hazardous: true,
                    diameterInMetres: '400.23',
                    missDistanceInKm: '99999999.99',
                    velocityKmpH: '9876.12',
                },
                {
                    name: '(2021 VV26)',
                    hazardous: false,
                    diameterInMetres: '392.23',
                    missDistanceInKm: '24028686.19',
                    velocityKmpH: '36023.16',
                },
            ];
            const returnedAsteroidArray = processAsteroidData(asteroids);
            expect(returnedAsteroidArray).to.deep.equal(expectedAsteroidArray)
        });

        it('Asteroid information is calculated successfully if there are no asteroids', () => {
            const expectedAsteroidArray = [];
            const returnedAsteroidArray = processAsteroidData([]);
            expect(returnedAsteroidArray).to.deep.equal(expectedAsteroidArray)
        });
    });
});
