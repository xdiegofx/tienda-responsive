import React from "react";
import Slider from "react-slick";
import "../styles/Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider(1).jpg";
import slider2 from "../assets/slider(2).jpg";
import slider3 from "../assets/slider(3).jpg";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="banner">
            <Slider {...settings}>
                <div className="slide">
                    <img src={slider1} alt="Slide 1" />
                    <div className="slide-text">
                        <h1>Bienvenidos Al Remante</h1>
                        <p>Los mejores productos a los mejores precios con los mejores descuentos</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={slider2} alt="Slide 2" />
                    <div className="slide-text">
                        <h1>Bienvenidos Al Remante</h1>
                        <p>Los mejores productos a los mejores precios con los mejores descuentos</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={slider3} alt="Slide 3" />
                    <div className="slide-text">
                        <h1>Bienvenidos Al Remante</h1>
                        <p>Los mejores productos a los mejores precios con los mejores descuentos</p>
                    </div>
                </div>
            </Slider>      
        </div>
    );
};

export default Banner;