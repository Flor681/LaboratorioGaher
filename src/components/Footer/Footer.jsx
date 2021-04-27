import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import LogoF from '../image/Logo.png';
import Facebook from '../image/facebook.png';
import Instagram from '../image/instagram.png';
import Whatssap from '../image/whatssap.png';

import "./Footer.css";

const Footer = () => {
    return (
        <div className="contenedorPiePagina">
            <div>
                <ReactBootStrap.Table responsive="sm">

                    <tbody>
                        <tr className="tablitass">

                            <td colSpan="4"><div className="logoPie"></div>
                            <img src={LogoF} style={{ height: '140px' }}className="logoPie" alt="logo"></img>
                                <div><a href="App" className="divs" ><h5>Laboratorio dental Gaher</h5></a></div>
                                </td>

                            <td><div className="ti">MÁS SOBRE NOSOTROS</div>
                                <div className="tis"><a href="www.google.com" className="tis" >¿QUIENES SOMOS?</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >HISTORIA</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >TESTIMONIOS</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >TECNOLOGÍA</a></div>

                            </td>
                            <td><div className="ti">NUESTROS SERVICIOS</div>
                                <div className="tis"><a href="www.google.com" className="tis" >ENVIO DE IMAGENES</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >SOLICITUD DE SERVICIOS</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >DESCARGAS</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >FACTURACIÓN ELECTRÓNICA</a></div>
                                <div className="tis"><a href="www.google.com" className="tis" >PREGUNTAS FRECUENTES</a></div>

                            </td>
                            
                            <td><div className="ti">SIGUENOS EN:</div>
                            
                                <ReactBootStrap.Container>
                                    
                                        <ReactBootStrap.Image src={Facebook} className="imgRed" />
                                        <ReactBootStrap.Image src={Instagram} className="imgRed" />
                                        <ReactBootStrap.Image src={Whatssap} className="imgRed" />
                                       
                                  
                                </ReactBootStrap.Container>
                            </td>

                        </tr>

                    </tbody>
                </ReactBootStrap.Table>

            </div>
            <div className="Foot-P">
                <p>@ 2021 , Todos los derechos reservados</p>
            </div>

        </div>
    )
}

export default Footer;