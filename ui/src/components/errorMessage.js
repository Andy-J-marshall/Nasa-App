import { Jumbotron } from 'react-bootstrap';

function ErrorMessage(props) {
    return (
        <Jumbotron style={{ margin: '2rem' }}>
            <h1 style={{ color: 'black' }}>Whoops, something went wrong!</h1>
            <p style={{ color: 'black' }}>{props.message}</p>
        </Jumbotron >
    )
}

export default ErrorMessage;
