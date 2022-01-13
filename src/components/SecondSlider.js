import React, { useState } from 'react';
import {SecondSliderContent} from '../arrays/SecondSliderContent';

function SecondSlider(){

    const [clicked, setClicked] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrolledLeft, setScrolledLeft] = useState(0);

    const HandleMouseDown = (e) => {

        setClicked(true);
        document.getElementById('slider').classList.add('active');
        setStartX(e.pageX - document.getElementById('slider').offsetLeft);
        setScrolledLeft(document.getElementById('slider').scrollLeft);

    }

    const HandleMouseUp = () => {
        setClicked(false);
        document.getElementById('slider').classList.remove('active');
    }

    const HandleMouseLeave = () => {
        setClicked(false);
        document.getElementById('slider').classList.remove('active');
    }

    const HandleMouseMove = (e) => {

        if(!clicked){
            return;
        }

        e.preventDefault();
        const x = e.pageX - document.getElementById('slider').offsetLeft;
        const move = (x - startX) * 2;
        document.getElementById('slider').scrollLeft = scrolledLeft - move;
            
    }

    return(
        <section className='second-slider-outter' id='carousel'>
            <h2 className='second-slider-text'>Scroll to see some of them</h2>
            <div className='second-slider-inner' id='slider' onMouseDown={HandleMouseDown} onMouseUp={HandleMouseUp} onMouseLeave={HandleMouseLeave} onMouseMove={HandleMouseMove}>
                {SecondSliderContent.map((content, index) => {
                    return <div className='second-slider-content' key={index}>
                        <h2 className='second-slider-content-text' >{content.heading}</h2>
                    </div>
                })}
            </div>
        </section>
    )

}

export default SecondSlider;