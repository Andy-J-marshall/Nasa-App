import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // TODO tidy this up. How will it work for the app in it's current state?
    return (
        <div className='navigation-bar'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand className='navigation-bar' href='#home'>NASA</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        {/* TODO I'm not sure this is directing to these IDs correctly - need to check */}
                        <Nav.Link href='#asteroid-info'>Asteroids</Nav.Link>
                        <Nav.Link href='#mars'>Mars</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;