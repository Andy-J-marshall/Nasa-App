import { Jumbotron } from 'react-bootstrap';

// TODO add error message to Mars
// TODO make sure error message works correctly for asteroids
function ErrorMessage(props) {
    return (
        <Jumbotron style={{ color: 'black' }}>
            <h1>Whoops, something went wrong!</h1>
            <p>{props.message}</p>
        </Jumbotron >
    )
}

export default ErrorMessage;
