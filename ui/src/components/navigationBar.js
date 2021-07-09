import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NavigationBar() {
    // TODO add hrefs to this
    // and tidy up
    return (
        <div id='home'>
            <Navbar variant='dark' bg='dark' expand='lg'>
                <Navbar.Brand href='#home'>NASA App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#asteroidInfo'>Asteroid Finder</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type='text' placeholder='Search' />
                        <Button variant='outline-success'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;