import React from 'react';
import { CardGroup, ProgressBar, Spinner } from 'react-bootstrap';
import Asteroid from './asteroid';
import ErrorMessage from './errorMessage';

function AsteroidInfo(props) {
    const asteroidResponse = props.asteroidResponse;
    const currentlySearching = props.currentlySearching;
    const errorResponse = props.errorResponse;
    const successfulSearch = props.successfulSearch;

    return (
        <div id='asteroid-info' className='component'>
            {(currentlySearching || asteroidResponse) && <h2>Asteroids</h2>}
            {currentlySearching && <Spinner animation='border' />}
            {!currentlySearching && errorResponse && !successfulSearch && <ErrorMessage message={errorResponse} />}
            {!currentlySearching && successfulSearch && asteroidResponse && <div>
                <p>{asteroidResponse.totalNumber} asteroids in the vicinity of Earth ({asteroidResponse.totalDangerousNumber} potentially dangerous). Danger level:</p>
                <ProgressBar
                    style={{ width: '46%' }}
                    now={asteroidResponse.dangerScore}
                    striped
                    variant={asteroidResponse.dangerScore > 75 ? 'danger' : 'warning'}
                    label={`${asteroidResponse.dangerScore}%`}
                />
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