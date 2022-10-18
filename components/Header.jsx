import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText ,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem,Button } from "reactstrap";
import Logo from '../public/aba_logo.png'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';

export default function Header () {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return(
<div>
      <Navbar className="backColor " expand="sm">
      <NavbarBrand href="/">
      <Image
        alt="logo"
        src={Logo}
        width={170}
        height={65}
        placeholder="blur"
      />
    </NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbar-light toggleBorder"/>
        <Collapse isOpen={isOpen} navbar >
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink href="/" className="colorNavHead">Ínicio</NavLink>
            </NavItem>
          <UncontrolledDropdown  nav inNavbar >
              <DropdownToggle nav caret className="colorNavHead">
                Produtos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="backHov fontQuick">Todos os Produtos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="backHov fontQuick">Caixas de Pizzas</DropdownItem>
                <DropdownItem className="backHov fontQuick">Guardanapos de papel personalizados</DropdownItem>
                <DropdownItem className="backHov fontQuick">Sacos de papel personalizados</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/about" className="colorNavHead">Sobre Nós</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contato" className="colorNavHead">Contato</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>

        
    )
}