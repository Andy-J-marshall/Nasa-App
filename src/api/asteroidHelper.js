const asteroidHelper = {
    processAsteroidData(spaceObjects) {
        const dangerousAsteroidArray = [];
        const safeAsteroidArray = [];
        spaceObjects.forEach((asteroid) => {
            const minDiam = asteroid.estimated_diameter.meters.estimated_diameter_min;
            const maxDiam = asteroid.estimated_diameter.meters.estimated_diameter_max;
            const averageDiam = ((maxDiam + minDiam) / 2).toFixed(2);
            const asteroidInfo = {
                name: asteroid.name,
                hazardous: asteroid.is_potentially_hazardous_asteroid,
                diameterInMetres: averageDiam,
                missDistanceInKm: (asteroid.close_approach_data[0].miss_distance.kilometers * 1).toFixed(2),
                velocityKmpH: (asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour * 1).toFixed(2),
            };
            if (asteroid.is_potentially_hazardous_asteroid) {
                dangerousAsteroidArray.push(asteroidInfo);
            } else {
                safeAsteroidArray.push(asteroidInfo);
            }
        });
        return dangerousAsteroidArray.concat(safeAsteroidArray);
    },

    checkDateIsValid(date, acceptedDateRangeInYears = 20) {
        let selectedDate = date;
        if (Object.prototype.toString.call(selectedDate) !== '[object Date]') {
            // Invalid date, setting to today instead
            selectedDate = new Date();
        }

        const earliestDate = new Date();
        earliestDate.setHours(1, 0, 0, 0);
        const latestDate = new Date();
        latestDate.setHours(24, 59, 59, 999);
        const earliestDateInt = earliestDate.setYear(earliestDate.getFullYear() - acceptedDateRangeInYears);
        const latestDateInt = latestDate.setYear(latestDate.getFullYear() + acceptedDateRangeInYears);

        const dateInt = selectedDate.getTime();
        if (dateInt < earliestDateInt || dateInt > latestDateInt) {
            // Invalid date, setting to today instead
            selectedDate = new Date();
        }
        selectedDate.setHours(1, 0, 0, 0);
        return selectedDate;
    },

    calculateDangerScore(numberOfAsteroids, numberOfDangerousAsteroids) {
        if (numberOfAsteroids < 0 || numberOfDangerousAsteroids < 0) {
            return 0;
        };
        const nonDangerousScore = (numberOfAsteroids - numberOfDangerousAsteroids) * 2;
        const dangerousScore = numberOfDangerousAsteroids * 15;
        const totalScore = nonDangerousScore + dangerousScore;
        const dangerScore = totalScore < 100 ? totalScore : 100;
        return dangerScore;
    },
}

module.exports = asteroidHelper;
