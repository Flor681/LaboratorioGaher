import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import LabImg  from '../image/lab-Article.jpg';
import "./Articulo.css";

const Articulo = () => {
    return (
        <div className="Article">
            <ReactBootStrap.Card className="bg-light text-black">
                <ReactBootStrap.Card.Img src={LabImg} className="Lab-Img" alt="Laboratorio Gaher" />
                <ReactBootStrap.Card.ImgOverlay>
                    <ReactBootStrap.Card.Text className="Contenido" >

                        <ReactBootStrap.Card border="primary" style={{width: '40rem' , backgroundColor: 'transparent', margin:'80px 200px 20px 200px', textAlign:'center'}} >
                            <ReactBootStrap.Card.Header className="title-I" >GAHER</ReactBootStrap.Card.Header >
                            <ReactBootStrap.Card.Body className="Cont">
                                <ReactBootStrap.Card.Title style= {{color:'grey', fontWeight:'bold'}}>
                                    Conocenos somos tu mejor opción ...</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text >
                                Creamos para ti los mejores productos de acuerdo a tus necesidades, ofreciendo un buen servicio
                                y sobre todo con mayor atención y grandes resultados de clientes satisfechos.
                            </ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                        <br />
                       
                    </ReactBootStrap.Card.Text>
                    <ReactBootStrap.Card.Text>
                    <ReactBootStrap.Button href="#" style= {{margin:'30px 400px 20px 400px'}}>CONTACTANOS AHORA</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Text>
                </ReactBootStrap.Card.ImgOverlay>
            </ReactBootStrap.Card>
        </div>
    )
}
export default Articulo;