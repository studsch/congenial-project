import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default function NaviBar() {
    const [toggleOpen, setToggleOpen] = React.useState(false)
    const onMouseOver = () => {setToggleOpen(true)}
    const onMouseOut = () => {setToggleOpen(false)}
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Фасад строй</Navbar.Brand>
            <Navbar.Toggle type="button" onMouseOver={onMouseOver} onMouseOut={onMouseOut} aria-controls="reosponsive-navbar-nav"/>
            <Navbar.Collapse className={toggleOpen ? 'show' : 'hide'}>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}