import React, { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Asteroid from './asteroid';
import DateSelector from './dateSelector';
import ErrorMessage from './errorMessage';
import axios from 'axios';

function AsteroidInfo() {
    const [asteroidResponse, setAsteroidResponse] = useState();
    const [errorResponse, setErrorResponse] = useState();
    const [successfulSearch, setSuccessfulSearch] = useState();

    async function getAsteroidInfo(date) {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/asteroid'
        }
        try {
            const res = await axios.request(options);
            setAsteroidResponse(res.data);
            setSuccessfulSearch(true);
        } catch (error) {
            console.log(error.message);
            setErrorResponse(error.response.data);
            setSuccessfulSearch(false);
        }
    }

    // TODO make this page prettier
    // TODO sort out default height
    // TODO sort out default margin 

    return (
        <div className='asteroid-info' id='asteroidInfo'>
            <h2 style={{ marginLeft: '2rem' }}>SELECT A DATE</h2>
            <DateSelector yearRange={20} searchCallback={getAsteroidInfo} />

            {errorResponse && !successfulSearch && <ErrorMessage message={errorResponse} />}
            {successfulSearch && asteroidResponse && <div>
                {<div style={{ margin: '1.5rem' }} >
                    <h2>OVERVIEW</h2>
                    <p style={{ marginLeft: '2rem' }}>Total number of asteroids in the vicinity of Earth: {asteroidResponse.totalNumber}</p>
                    <p style={{ marginLeft: '2rem' }}>Total number of dangerous asteroids: {asteroidResponse.totalDangerousNumber}</p>
                </div>}
                {asteroidResponse.totalNumber > 0 && <h2 style={{ marginTop: '2rem', marginLeft: '1.5rem' }}>ASTEROIDS</h2>}
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