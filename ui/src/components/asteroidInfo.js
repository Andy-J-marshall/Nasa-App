import React, { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Asteroid from './asteroid';
import DateSelector from './dateSelector';
import axios from 'axios';

function AsteroidInfo() {
    const [asteroidResponse, setAsteroidResponse] = useState();
    const [date, setDate] = useState(new Date());

    function getAsteroidInfo() {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/asteroid'
        }
        axios.request(options)
            .then(res => setAsteroidResponse(res.data));
    }

    // TODO make this page prettier
    // TODO sort out default height
    // TODO sort out default margin 

    return (
        <div className='asteroid-info' id='asteroidInfo'>
            <h2 style={{ marginLeft: '2rem' }}>SELECT A DATE</h2>
            <DateSelector dateCallback={setDate} searchCallback={getAsteroidInfo} />
            {asteroidResponse && <div style={{ margin: '1.5rem' }} >
                <h2>OVERVIEW</h2>
                <p style={{ marginLeft: '2rem' }}>Total number of asteroids in the vicinity of Earth: {asteroidResponse.totalNumber}</p>
                <p style={{ marginLeft: '2rem' }}>Total number of dangerous asteroids: {asteroidResponse.totalDangerousNumber}</p>
            </div>}
            {asteroidResponse && asteroidResponse.totalNumber > 0 && <h2 style={{ marginTop: '2rem', marginLeft: '1.5rem' }}>ASTEROIDS</h2>}
            <CardGroup>
                {asteroidResponse && asteroidResponse.asteroids.map((asteroid, index) => {
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
        </div>
    )
}

export default AsteroidInfo;