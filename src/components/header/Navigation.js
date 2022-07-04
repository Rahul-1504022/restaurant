import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });  //Toggle navigation bar
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/" >
                            Restaurant
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link active">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link active">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link active">Contact</Link>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }
}
export default Navigation;