import { Jumbotron } from 'react-bootstrap';

function ErrorMessage(props) {
    return (
        <Jumbotron style={{ color: 'black' }}>
            <h1>Whoops, something went wrong!</h1>
            <p>{props.message}</p>
        </Jumbotron >
    )
}

export default ErrorMessage;
