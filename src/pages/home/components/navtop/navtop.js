import React, {useState} from "react"
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink 
  } from 'reactstrap';

import './navtop.css'

function NavTop(props){

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
          <div className ="datNav" >
    <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">Command Tower</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/cmd">Command Line</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/languages">Languages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/data">Databases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/docker">Docker</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}
export default NavTop;