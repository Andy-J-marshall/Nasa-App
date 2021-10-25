import Jumbotron from 'react-bootstrap/Jumbotron';
import NavigationBar from './navigationBar';

function Header() {
    return (
        <div>
            <Jumbotron style={{ margin: '0' }}>
                <h1>NASA Information Centre</h1>
            </Jumbotron>
            <NavigationBar />
        </div>
    );
}

export default Header;
