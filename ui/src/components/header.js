import Jumbotron from 'react-bootstrap/Jumbotron';
import NavigationBar from './navigationBar';

function Header() {
    return (
        <div>
            <Jumbotron style={{ textAlign: 'center', margin: 0 }}>
                <h1 style={{ fontSize: '5rem' }}>NASA Information Centre</h1>
            </Jumbotron>
            <NavigationBar />
        </div>
    );
}

export default Header;
