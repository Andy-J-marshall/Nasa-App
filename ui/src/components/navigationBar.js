import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // TODO add more hrefs to this
    return (
        <div className='navigation-bar' id='home'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand className='navigation-bar' href='#home'>NASA App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='#asteroidInfo'>Asteroids</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;