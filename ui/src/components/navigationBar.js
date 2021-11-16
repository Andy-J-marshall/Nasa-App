import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // TODO tidy this up
    return (
        <div className='navigation-bar' id='home'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand className='navigation-bar' href='#home'>NASA App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        {/* TODO I'm not sure this is directing to these IDs correctly - need to check */}
                        <Nav.Link href='#asteroidInfo'>Asteroids</Nav.Link>
                        <Nav.Link href='#marsPhoto'>Mars</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;