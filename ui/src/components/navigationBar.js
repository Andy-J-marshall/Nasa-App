import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    // TODO Create an About page
    return (
        <div className='navigation-bar'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand className='navigation-bar' href='#home'>NASA</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='#asteroid-info'>Asteroids</Nav.Link>
                        <Nav.Link href='#mars'>Mars</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;