import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import supplychainIcon from '../../images/supply-chain.png';
export default function MainNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <img src={supplychainIcon} alt="icon" />
                    Agrow-Chain
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/supplychains">
                            View supply-chains
                        </Nav.Link>
                        <Nav.Link as={Link} to="/manageSupplyChain">
                            Manage supply-chains
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
