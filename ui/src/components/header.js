import Jumbotron from 'react-bootstrap/Jumbotron';
import NavigationBar from './navigationBar';

function Header() {
    return (
        <div>
            <Jumbotron>
                <h1>NASA Information Centre</h1>
            </Jumbotron>
            <NavigationBar />
        </div>
    );
}

export default Header;