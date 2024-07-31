import React, { useEffect, useRef, useState } from "react";
import { merch } from "./Merch";
import "../styles/Slider.css";

const Slider = () =>{
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=> {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]
        if(imgNode){
            imgNode.scrollIntoView({
               behavior:"smooth" 
            })
        }
    },[currentIndex])

    const scrollToImage = (direction) => {
        if(direction === "prev"){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0: curr -1
            })
        }else{
            const isLastSlide = currentIndex === merch.length -1
            if(!isLastSlide){
                setCurrentIndex(currentIndex + 1);
            }
        }
    }

    return(
        <div className="main-slider">
            <div className="slider-container">
                <div id="arrow-left" onClick={()=> scrollToImage("prev")}>&#10094;</div>
                <div id="arrow-right"onClick={()=> scrollToImage("next")}>&#10095;</div>
                <div className="img-container">
                    <ul ref={listRef}>
                        {
                            merch.map((item) => {
                                return<li key ={item.id}>
                                     <img src={item.imgUrl} width={700} height={350} alt="carrusel imagenes"/>
                                </li>  
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider;