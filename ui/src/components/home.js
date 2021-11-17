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

    // TODO make it look nicer when selecting a new date. Currently it loads things in at weird times

    async function getMarsPhoto(date) {
        const options = {
            params: { date },
            method: 'get',
            url: 'http://localhost:9000/mars'
        };
        try {
            const res = await axios(options);
            setMarsResponse(res.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div id='home'>
            <h1>Solar System</h1>
            <p>Select a date:</p>
            <DateSelector yearRange={20} asteroidSearchCallback={getAsteroidInfo} marsSearchCallback={getMarsPhoto} />
            <MarsPhoto marsResponse={marsResponse} />
            <AsteroidInfo
                asteroidResponse={asteroidResponse}
                errorResponse={errorResponse}
                successfulSearch={successfulSearch}
                currentlySearching={currentlySearching}
            />
        </div>
    )
}

export default Home;
