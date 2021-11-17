import Jumbotron from 'react-bootstrap/Jumbotron';
import NavigationBar from './navigationBar';

function Header() {
    // TODO make this navigate to home page?
    return (
        <div>
            <Jumbotron style={{ margin: 0 }}>
                <h1 style={{ fontSize: '5rem' }}>NASA Information Centre</h1>
            </Jumbotron>
            <NavigationBar />
        </div>
    );
}

export default Header;
