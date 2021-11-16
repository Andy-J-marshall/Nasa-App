import dotenv from 'dotenv';
import axios from 'axios';
import React, { useState } from 'react';
import DateSelector from './dateSelector';

dotenv.config();

function MarsWeather() {
    // TODO need to expand on this to display the photo and basic info
    // TODO need a button/date box to prompt an API call
    const [marsResponse, setMarsResponse] = useState();

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
        <div id='mars'>
            <h2>Mars Photo of the Day</h2>
            <p>Select the date</p>
            {/* TODO need to prevent future (or recent?) dates ? */}
            <DateSelector yearRange={20} searchCallback={getMarsPhoto} />
            {marsResponse && <div>
                <div className='image-container'>
                    <img id='mars-photo' alt='Surface of Mars' src={marsResponse.img}></img>
                    <div className='top-left'>
                        {/* TODO need to make the text scale */}
                        <p>{marsResponse.name}<br />
                            Sol {marsResponse.sol}<br />
                            Rover launched {marsResponse.rover.launchDate}<br />
                            Rover landed {marsResponse.rover.landingDate}<br />
                            Rover status: {marsResponse.rover.status}<br />
                        </p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MarsWeather;