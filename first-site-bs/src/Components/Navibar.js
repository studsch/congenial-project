import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default function NaviBar() {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Фасад строй</Navbar.Brand>
            <Navbar.Toggle aria-controls="reosponsive-navbar-nav"/>
            <Navbar.Collapse id="reosponsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}