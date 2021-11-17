import React, { useState } from 'react';
import axios from 'axios';
import DateSelector from './dateSelector';
import MarsPhoto from './marsPhoto';
import AsteroidInfo from './asteroidInfo';

function Home() {
    const [marsResponse, setMarsResponse] = useState();
    const [asteroidResponse, setAsteroidResponse] = useState();
    const [errorResponse, setErrorResponse] = useState();
    const [successfulSearch, setSuccessfulSearch] = useState();
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
            setSuccessfulSearch(true);
        } catch (error) {
            console.log(error.message);
            setCurrentlySearchingAsteroids(false);
            setErrorResponse(error.response.data);
            setSuccessfulSearch(false);
        }
    }

    // TODO make it look nicer when selecting a new date. Currently it loads things in at weird times

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
        } catch (error) {
            setCurrentlySearchingMars(false);
            console.log(error.message);
        }
    }

    return (
        <div id='home'>
            <h1>Solar System</h1>
            <p>Select a date:</p>
            <DateSelector yearRange={20} asteroidSearchCallback={getAsteroidInfo} marsSearchCallback={getMarsPhoto} />
            <MarsPhoto marsResponse={marsResponse} currentlySearching={currentlySearchingMars} />
            <AsteroidInfo
                asteroidResponse={asteroidResponse}
                errorResponse={errorResponse}
                successfulSearch={successfulSearch}
                currentlySearching={currentlySearchingAsteroids}
            />
        </div>
    )
}

export default Home;
