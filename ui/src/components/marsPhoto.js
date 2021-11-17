import dotenv from 'dotenv';
import React from 'react';
import martianPicture from '../assets/martians.png';

dotenv.config();

function MarsWeather(props) {
    const marsResponse = props.marsResponse;

    return (
        <div id='mars' className='component'>
            {marsResponse && !marsResponse.imageFound && renderDefaultImage()}
            {marsResponse && marsResponse.imageFound && renderImage(marsResponse)}
        </div>
    )
}

function renderDefaultImage() {
    return (
        <div>
            <h2>Mars Photo of the Day</h2>
            <p>No image found, try selecting a date in the past.</p>
            <img id='mars-photo' alt='Cartoon martian' src={martianPicture}></img>
        </div>
    )
}

function renderImage(marsResponse) {
    return (
        <div className='image-container'>
            <h2>Mars Photo of the Day</h2>
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