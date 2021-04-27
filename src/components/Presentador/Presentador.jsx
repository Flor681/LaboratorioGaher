import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Imagen1 from "../image/Presentador1.png";
import Imagen4 from "../image/imagen4.png";
import Imagen5 from "../image/imagen5.png";
import "./Presentador.css";


const Presentador = () => {
    return (
        <div className="slider">
            <ReactBootStrap.Carousel >
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen1}
                        alt="First slide"
                    />
                   
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen5}
                        alt="Second slide"
                    />

                    
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Imagen4}
                        alt="Third slide"
                    />

                   
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>
        </div>
    )
}

export default Presentador
