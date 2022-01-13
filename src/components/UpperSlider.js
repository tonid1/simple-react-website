import React, { useEffect, useState } from 'react';
import {SliderContent} from '../arrays/SliderContent';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function UpperSlider({slides}){
    const [current, setCurrent]=useState(0);
    const length = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length-1 ? 0 : current+1)
        }, 5000);
        return () => clearInterval(interval); 
    })

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return(
        <section className='slider-section' id='first-slider'>
            <FaChevronLeft className='left-arrow' onClick={prevSlide}/>
            <FaChevronRight className='right-arrow' onClick={nextSlide}/>
            {SliderContent.map((slide, index) => {
               return <div className={index === current ? 'slide active' : 'slide'} key={index}>
                   {index === current && (
                    <div style={{backgroundImage: 'url('+slide.image+')', backgroundSize: 'cover', position: 'relative'}}>
                        <div className='slide-overlay' />
                        <h2 className='slide-img'>
                            {slide.heading}
                        </h2>
                    </div> )}
               </div>
            })}
        </section>
    )
}

export default UpperSlider;