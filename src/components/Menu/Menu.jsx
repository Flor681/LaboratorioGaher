import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import LogoGager from '../image/LogoCompleto2.png';
import './estilosMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';





const Menu = () => {
    return (
        <div>
  <ReactBootStrap.Navbar className="header1">
  
  
  <ReactBootStrap.Navbar.Collapse className="justify-content-end">
  <ReactBootStrap.Nav.Link href="#features"><FontAwesomeIcon icon={faPhoneAlt}  style={{width: "1.5rem", color: "rgba(18, 193, 247, 0.822)"}}/>(+52) 3531068783</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing"><FontAwesomeIcon icon={faEnvelope}  style={{width: "1.5rem", color: "rgba(18, 193, 247, 0.822)"}}/>gaher@gmail.com</ReactBootStrap.Nav.Link>
            
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

<ReactBootStrap.Navbar className="header2"  collapseOnSelect expand="lg" >
        <ReactBootStrap.Navbar.Brand href="#home"><img src={LogoGager} style={{height:'110px'}}/></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">INICIO</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">PRODUCTOS</ReactBootStrap.Nav.Link>

            <ReactBootStrap.NavDropdown title="COMO TRABAJAMOS" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">ENVIO Y RECEPCIÓN</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">RECETA</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">CONTROL DE CALIDAD</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">EMPAQUE Y ENVIE</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.5">CALENDARIO DE TRABAJO</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.6">POLITICA DE GARANTIA</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.NavDropdown title="SERVICIOS CLIENTE" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/4.1">ENVIO DE IMAGENES</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/4.2">SOLICITUD DE SERVICIOS</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/4.3">DESCARGAS</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/4.4">FACTURACIÓN ELECTRONICA</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/4.5">PREGUNTAS FRECUENTES</ReactBootStrap.NavDropdown.Item>
              
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.NavDropdown title="CONOZCANOS" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/5.1">¿QUIENES SOMOS?</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/5.2">HISTORIA</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/5.3">TESTIMONIOS</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/5.4">TECNOLOGÍA</ReactBootStrap.NavDropdown.Item>
              
              
            </ReactBootStrap.NavDropdown>

          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
              
            <ReactBootStrap.Nav.Link href="#deets">CONTACTO</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
              BLOG
      </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
        </div>
    )
}

export default Menu
