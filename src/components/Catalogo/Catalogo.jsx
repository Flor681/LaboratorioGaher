import React from 'react';
import CardDeck from '@bit/react-bootstrap.react-bootstrap.card-deck';
import Card from '@bit/react-bootstrap.react-bootstrap.card';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import producto1 from '../image/produc1.jpg';
import producto2 from '../image/produc2.jpg';
import producto3 from '../image/product3.jpg';
import producto4 from '../image/product4.jpg';
import producto5 from '../image/product5.jpg';
import "./Catalogo.css";

const Catalogo = () => {

    return (
        <div style={{ position: "relative", margin: "0 auto", width: "80%", marginTop: "70px" }}>
            <hr className="linea" />
            <p className="titleCat">CATALOGO DE PRODUCTOS</p>
            <hr className="linea" />
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={producto1} style={{ width: "100%", height: "170px" }} />
                    <Card.Body>
                        <Card.Title href="www.google.com" className="tituloCard"><a href="www.facebook.com" className="tituloCard" style={{ textDecoration: "none" }}>PROTESIS METÁLICAS</a></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={producto2} style={{ width: "100%", height: "170px" }} />
                    <Card.Body>
                        <Card.Title  ><a href="#home" className="tituloCard" style={{ textDecoration: "none" }}>PROTESIS FIJA DE ALTA ESTÉTICA</a></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={producto3} style={{ width: "100%", height: "170px" }} />    <Card.Body>
                        <Card.Title href="#home"><a href="#home" className="tituloCard" style={{ textDecoration: "none" }}>PROTESIS REMOVIBLES</a></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={producto4} style={{ width: "100%", height: "170px" }} />
                    <Card.Body>
                        <Card.Title href="#home"><a href="#home" className="tituloCard" style={{ textDecoration: "none" }}>PROTESIS METAL POCELANA</a></Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={producto5} style={{ width: "100%", height: "170px" }} />
                    <Card.Body>
                        <Card.Title href="#pricing"><a href="#home" className="tituloCard" style={{ textDecoration: "none" }} >OTROS TIPOS DE PROTESIS</a></Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Catalogo;