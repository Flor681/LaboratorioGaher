import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Marcas.css";
import uno from "../image/1.png";
import dos from "../image/2.png";
import tres from "../image/3.jpg";
import cuatro from "../image/4.png";
import cinco from "../image/5.png";
import seis from "../image/6.png";
import siete from "../image/7.png";
import ocho from "../image/8.png";
import nueve from "../image/9.png";



const Marcas = () => {
    return (
        <div className="Carrusel">
            <hr className="linea" />
            <p className="titleCat">NUESTRAS MARCAS</p>
            <hr className="linea" />
            <div className="Presentando">
            <ReactBootStrap.Carousel>
                <ReactBootStrap.Carousel.Item >
                    <ReactBootStrap.CardGroup>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={uno} />
                           
                            
                        </ReactBootStrap.Card>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={dos} />
                             
                        </ReactBootStrap.Card>

                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={tres} />
                               
                        </ReactBootStrap.Card>
                    </ReactBootStrap.CardGroup>

                    
                </ReactBootStrap.Carousel.Item>

                <ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.CardGroup>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={cuatro} />
                            
                            
                        </ReactBootStrap.Card>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={cinco} />
                          
                        </ReactBootStrap.Card>

                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={seis} />
                             
                        </ReactBootStrap.Card>
                    </ReactBootStrap.CardGroup>

                    

                    
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                <ReactBootStrap.CardGroup>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={siete} />
                        
                            
                        </ReactBootStrap.Card>
                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={ocho} />
                             
                        </ReactBootStrap.Card>

                        <ReactBootStrap.Card>
                            <ReactBootStrap.Card.Img variant="top" src={nueve} />
                             
                        </ReactBootStrap.Card>
                    </ReactBootStrap.CardGroup>

                    
                    
                </ReactBootStrap.Carousel.Item>
                
            </ReactBootStrap.Carousel>
            </div>

        </div>
    )
}

export default Marcas