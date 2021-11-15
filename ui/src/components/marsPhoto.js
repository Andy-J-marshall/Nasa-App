import dotenv from 'dotenv';
dotenv.config();

function MarsWeather() {
    // TODO need to expand on this to display the photo and basic info
    // TODO need a button/date box to prompt an API call
    return (
        // TODO work on this next
        <div id='marsPhoto'>
            <p>Mars Photo of the Day</p>
            {/* <p>{getWeather()}</p> */}
        </div>
    )
}

export default MarsWeather;