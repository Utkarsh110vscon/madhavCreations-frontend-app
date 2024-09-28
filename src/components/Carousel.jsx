import { useState,useEffect } from "react";
import carousel1 from "../assets/images/crousel1.jpg";
import carousel2 from "../assets/images/crousel2.jpeg";
import carousel3 from "../assets/images/crousel3.jpg";
import carousel4 from "../assets/images/crousel4.jpg";


export const Carousel= () => {
    const [currentIndex, setCurrentIndex]= useState(0);
    const images=[carousel1,carousel2,carousel3,carousel4];
    const [directionState, setDirectinoState]= useState(true);

    useEffect(()=>{
        if(currentIndex===images.length-1){
            setDirectinoState(false);
        }else if(directionState===0){
            setDirectinoState(true);
        }
        const timer= setInterval(()=>{
            if(directionState){
                nextSlide();
            }else{
                prevSlide();
            }
            
        },3000);
        return () => clearInterval(timer);
    },[currentIndex])

    const nextSlide= () => {
        currentIndex === images.length-1 ? setCurrentIndex(0) : setCurrentIndex((prev)=> prev+1);
    }

    const prevSlide= () => {
        currentIndex === 0 ? setCurrentIndex(images.length-1) : setCurrentIndex((prev)=> prev-1);
    }

    return(
        <div className="relative overflow-hidden">
            <div className="flex" 
            style={{ transform: `translateX(${-currentIndex*100}%)`, transition: "transform 700ms linear" }}>
                {images.map((image,index) => {
                    return(
                        <div key={index} className="w-full flex-shrink-0" >
                            <img src={image} className="h-[72.5vh] w-full object-cover"/>
                        </div>
                    );
                })}
            </div>
           
            <button 
            onClick={nextSlide} 
            disabled={currentIndex===images.length-1}
            className={ 
                currentIndex===images.length-1 ? "bg-slate-50 opacity-50 py-1 px-7 absolute top-1/2" : 
                "bg-white opacity-100 py-1 px-7 absolute top-1/2"}
            >
                next
            </button> 
            

            <button 
            onClick={prevSlide} 
            disabled={currentIndex===0} 
            className={
                currentIndex===0 ? "bg-white opacity-50 py-1 px-7 absolute right-0 top-1/2" 
                : "bg-white opacity-100 py-1 px-7 absolute right-0 top-1/2" }>
                prev
            </button>
                
            
            
        </div>
    );
}