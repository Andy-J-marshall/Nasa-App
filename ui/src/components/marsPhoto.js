import dotenv from 'dotenv';
import axios from 'axios';
import React, { useState } from 'react';
import DateSelector from './dateSelector';
import martianPicture from '../assets/martians.png';

dotenv.config();

function MarsWeather() {
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
            <p>Select the date:</p>
            <DateSelector yearRange={20} searchCallback={getMarsPhoto} />
            {marsResponse && !marsResponse.imageFound && renderDefaultImage()}
            {marsResponse && marsResponse.imageFound && renderImage(marsResponse)}
        </div>
    )
}

function renderDefaultImage() {
    return (
        <div>
            <p>No image found, try selecting a date in the past.</p>
            <img id='mars-photo' alt='Cartoon martian' src={martianPicture}></img>
        </div>
    )
}

function renderImage(marsResponse) {
    return (
        <div className='image-container'>
            <img id='mars-photo' alt='Surface of Mars' src={marsResponse.img}></img>
            <div className='top-left'>
                <p>{marsResponse.name}<br />
                    Sol {marsResponse.sol}<br />
                    Rover launched {marsResponse.rover.launchDate}<br />
                    Rover landed {marsResponse.rover.landingDate}<br />
                    Rover status: {marsResponse.rover.status}<br />
                </p>
            </div>
        </div>
    )
}

export default MarsWeather;