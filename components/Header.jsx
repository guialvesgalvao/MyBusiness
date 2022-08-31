import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText ,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem,Button } from "reactstrap";
import Logo from '../public/aba_logo.png'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Header () {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

    return(
<>
  <Navbar
    className="backColor"    
  >
    <NavbarBrand href="/">
      <Image
        alt="logo"
        src={Logo}
        width={170}
        height={65}
        placeholder="blur"
      />
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
  </Navbar>
</>

        
    )
}
/*                <Link href="/" >
<a>
<Image src={Logo} alt="Aba Embalagens" />
</a>
</Link>*/