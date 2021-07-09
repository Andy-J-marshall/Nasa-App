import { Card, ListGroup, Badge } from 'react-bootstrap';
import asteroidImg from '../assets/asteroid.png';
import dangerAsteroidImg from '../assets/dangerAsteroid.png';

function Asteroid(props) {
    return (
        <div>
            <Card style={{ width: '23rem', height: '23rem', margin: '1.5rem', backgroundImage: `url(${props.danger ? dangerAsteroidImg : asteroidImg})`, backgroundSize: 'auto' }}>
                <Card.Title style={{ color: 'white', marginBottom: '4rem' }}>Asteroid {props.name} {props.danger && <Badge className='float-right' pill variant='danger'>danger</Badge>}</Card.Title>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ color: 'black', opacity: 0.8 }}>Distance from Earth: {props.distance} km</ListGroup.Item>
                        <ListGroup.Item style={{ color: 'black', opacity: 0.8 }}>Speed: {props.velocity} kmph</ListGroup.Item>
                        <ListGroup.Item style={{ color: 'black', opacity: 0.8 }}>Diameter: {props.diameter} metres</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Asteroid;
