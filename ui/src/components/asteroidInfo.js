import React, { useState } from 'react';
import axios from 'axios';
import { CardGroup } from 'react-bootstrap';
import Asteroid from './asteroid';
import DateSelector from './dateSelector';
import ErrorMessage from './errorMessage';

function AsteroidInfo() {
    const [asteroidResponse, setAsteroidResponse] = useState();
    const [errorResponse, setErrorResponse] = useState();
    const [successfulSearch, setSuccessfulSearch] = useState();
    const [currentlySearching, setCurrentlySearching] = useState(false);

    async function getAsteroidInfo(date) {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/asteroid'
        }
        try {
            setCurrentlySearching(true);
            const res = await axios.request(options);
            setCurrentlySearching(false);
            setAsteroidResponse(res.data);
            setSuccessfulSearch(true);
        } catch (error) {
            console.log(error.message);
            setCurrentlySearching(false);
            setErrorResponse(error.response.data);
            setSuccessfulSearch(false);
        }
    }

    return (
        <div id='asteroid-info'>
            <h2>Asteroids</h2>
            <p>This page will show you information about the asteroids near Earth.</p>
            <p>Select a date:</p>
            <DateSelector yearRange={20} searchCallback={getAsteroidInfo} />
            {currentlySearching && <p>Loading</p>}
            {!currentlySearching && errorResponse && !successfulSearch && <ErrorMessage message={errorResponse} />}
            {!currentlySearching && successfulSearch && asteroidResponse && <div>
                {<div style={{ marginTop: '1.5rem' }} >
                    <h2>Overview</h2>
                    <p>Asteroids in the vicinity of Earth: {asteroidResponse.totalNumber}</p>
                    <p>Potentially dangerous asteroids: {asteroidResponse.totalDangerousNumber}</p>
                </div>}
                {asteroidResponse.totalNumber > 0 && <h2 style={{ marginTop: '2rem' }}>Asteroids</h2>}
                <CardGroup>
                    {asteroidResponse.asteroids.map((asteroid, index) => {
                        return <Asteroid
                            key={index}
                            name={asteroid.name}
                            danger={asteroid.hazardous}
                            distance={asteroid.missDistanceInKm}
                            diameter={asteroid.diameterInMetres}
                            velocity={asteroid.velocityKmpH}
                        />
                    })}
                </CardGroup>
            </div>}
        </div>
    )
}

export default AsteroidInfo;