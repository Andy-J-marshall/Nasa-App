import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config(); // TODO get this working

function MarsWeather() {

    // TODO use the API I created
    const apiKey = process.env.API_KEY;
    console.log('DOTENV TEST' + apiKey)


    return (
        <div>
            <p>Mars Weather component</p>
            {/* <p>{getWeather()}</p> */}
        </div>
    )
}

export default MarsWeather;