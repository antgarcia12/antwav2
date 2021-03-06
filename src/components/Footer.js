import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import './Footer.css';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar navbar-default" color="dark" light expand="md">
                <NavbarBrand className="copyright">© 2021</NavbarBrand>
                {/* <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar> */}
                <Nav className="me-auto" navbar>
                    {/* <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        </div>
    );
}

export default Example;