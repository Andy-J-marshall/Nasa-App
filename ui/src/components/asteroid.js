import { Card, ListGroup, Badge } from 'react-bootstrap';
import asteroidImg from '../assets/asteroid.png';
import dangerAsteroidImg from '../assets/dangerAsteroid.png';

function Asteroid(props) {
    return (
        <div>
            <Card className='asteroid' style={{ backgroundImage: `url(${props.danger ? dangerAsteroidImg : asteroidImg})` }}>
                <Card.Title>Asteroid {props.name} {props.danger && <Badge className='float-right' pill variant='danger'>danger</Badge>}</Card.Title>
                <Card.Body>
                    <ListGroup className='asteroid-text' variant="flush">
                        <ListGroup.Item>Distance from Earth: {props.distance} km</ListGroup.Item>
                        <ListGroup.Item>Speed: {props.velocity} kmph</ListGroup.Item>
                        <ListGroup.Item>Diameter: {props.diameter} metres</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Asteroid;
