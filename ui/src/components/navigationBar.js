import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // TODO Create an About page
    return (
        <div className='navigation-bar'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand style={{ paddingLeft: '1%' }} className='navigation-bar' href='#home'>NASA</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link style={{ paddingLeft: '25%' }} href='#asteroid-info'>Asteroids</Nav.Link>
                        <Nav.Link style={{ paddingLeft: '10%' }} href='#mars'>Mars</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;