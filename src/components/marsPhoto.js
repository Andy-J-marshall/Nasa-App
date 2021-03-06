import React from 'react';
import { Spinner } from 'react-bootstrap';
import martianPicture from '../assets/martians.png';
import ErrorMessage from './errorMessage';

function MarsPhoto(props) {
    const marsResponse = props.marsResponse;
    const currentlySearching = props.currentlySearching;
    const errorResponse = props.errorResponse;
    const successfulSearch = props.successfulSearch;

    return (
        <div id='mars' className='component'>
            {(currentlySearching || marsResponse || errorResponse) && <h2>Mars Photo of the Day</h2>}
            {currentlySearching && <Spinner animation='border' />}
            {!currentlySearching && errorResponse && !successfulSearch && <ErrorMessage message={errorResponse} />}
            {!currentlySearching && marsResponse && !marsResponse.imageFound && renderDefaultImage()}
            {!currentlySearching && marsResponse && marsResponse.imageFound && renderImage(marsResponse)}
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

export default MarsPhoto;
