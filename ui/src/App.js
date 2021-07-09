import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import AsteroidInfo from './components/asteroidInfo';
// import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div id='app'>
      <Header />
      <AsteroidInfo />
      {/* <Container>
        <Row>
          <Col>Astronomy PotD</Col>
          <Col>Earth Satellite</Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;