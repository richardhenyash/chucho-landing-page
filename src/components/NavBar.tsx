import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container,
} from 'reactstrap';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            expand="md"
            fixed="top"
            className="bg-transparent navbar-light p-3"
            style={{ boxShadow: 'none', backdropFilter: 'none' }}
        >
            <NavbarBrand tag={Link} to="/" className="mx-4">
                Chucho Nonnet
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end">
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to={"/"} active={location.pathname === "/"}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"} active={location.pathname === "/contact"}>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>        
    );
};

export default NavBar;