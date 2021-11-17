import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Asteroid from './asteroid';
import ErrorMessage from './errorMessage';

function AsteroidInfo(props) {
    const asteroidResponse = props.asteroidResponse;
    const currentlySearching = props.currentlySearching;
    const errorResponse = props.errorResponse;
    const successfulSearch = props.successfulSearch;

    // TODO add a percentage of likelihood of dying?

    return (
        <div id='asteroid-info' className='component'>
            {currentlySearching && <p>Loading</p>}
            {!currentlySearching && errorResponse && !successfulSearch && <ErrorMessage message={errorResponse} />}
            {!currentlySearching && successfulSearch && asteroidResponse && <div>
                {asteroidResponse.totalNumber > 0 && <h2 style={{ marginTop: '2rem' }}>Asteroids</h2>}
                {<div style={{ marginTop: '1.5rem' }} >
                    <p>Asteroids in the vicinity of Earth: {asteroidResponse.totalNumber}</p>
                    <p>Potentially dangerous asteroids: {asteroidResponse.totalDangerousNumber}</p>
                </div>}
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