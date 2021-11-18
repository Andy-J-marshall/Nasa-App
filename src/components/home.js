import React, { useState } from 'react';
import axios from 'axios';
import DateSelector from './dateSelector';
import MarsPhoto from './marsPhoto';
import AsteroidInfo from './asteroidInfo';

function Home() {
    const [marsResponse, setMarsResponse] = useState();
    const [asteroidResponse, setAsteroidResponse] = useState();
    const [errorResponseAsteroids, setErrorResponseAsteroids] = useState();
    const [errorResponseMars, setErrorResponseMars] = useState();
    const [successfulSearchAsteroids, setSuccessfulSearchAsteroids] = useState();
    const [successfulSearchMars, setSuccessfulSearchMars] = useState();
    const [currentlySearchingAsteroids, setCurrentlySearchingAsteroids] = useState(false);
    const [currentlySearchingMars, setCurrentlySearchingMars] = useState(false);

    async function getAsteroidInfo(date) {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/asteroid'
        }
        try {
            setCurrentlySearchingAsteroids(true);
            const res = await axios.request(options);
            setCurrentlySearchingAsteroids(false);
            setAsteroidResponse(res.data);
            setSuccessfulSearchAsteroids(true);
        } catch (error) {
            setCurrentlySearchingAsteroids(false);
            setErrorResponseAsteroids(error.response.data);
            setSuccessfulSearchAsteroids(false);
        }
    }

    async function getMarsPhoto(date) {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/mars'
        };
        try {
            setCurrentlySearchingMars(true);
            const res = await axios(options);
            setCurrentlySearchingMars(false);
            setMarsResponse(res.data);
            setSuccessfulSearchMars(true);
        } catch (error) {
            setCurrentlySearchingMars(false);
            setErrorResponseMars(error.response.data);
            setSuccessfulSearchMars(false);
        }
    }

    return (
        <div id='home'>
            <h1>Solar System</h1>
            <p>Select a date:</p>
            <DateSelector yearRange={20} asteroidSearchCallback={getAsteroidInfo} marsSearchCallback={getMarsPhoto} />
            <MarsPhoto
                marsResponse={marsResponse}
                currentlySearching={currentlySearchingMars}
                successfulSearch={successfulSearchMars}
                errorResponse={errorResponseMars}
            />
            <AsteroidInfo
                asteroidResponse={asteroidResponse}
                currentlySearching={currentlySearchingAsteroids}
                successfulSearch={successfulSearchAsteroids}
                errorResponse={errorResponseAsteroids}
            />
        </div>
    )
}

export default Home;
