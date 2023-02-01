import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText ,UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem,Button } from "reactstrap";
import Logo from '../public/aba_logo.png'
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
              <NavLink href="/" className="colorNavHead">Home</NavLink>
            </NavItem>
          <UncontrolledDropdown  nav inNavbar >
              <DropdownToggle nav caret className="colorNavHead">
                Produtos
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem className="backHov fontQuick" href="/todos-produtos">Todos os Produtos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="backHov fontQuick" href="/produtos/caixas-de-pizza">Caixas de Pizzas</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/caixas-de-esfiha">Caixas de Esfiha</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/guardanapos">Guardanapos de papel personalizados</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/sacos-de-papel">Sacos de papel personalizados</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/copos">Copos de papel personalizados</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/embalagens">Embalagens para Padaria, Cafeteria e Delivery</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/pdv">Material de Ponto de Venda</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/impressos-graficos">Impressos Gráficos</DropdownItem>
                <DropdownItem className="backHov fontQuick" href="/produtos/caixas-ecommerce">Caixas E-Commerce</DropdownItem>
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