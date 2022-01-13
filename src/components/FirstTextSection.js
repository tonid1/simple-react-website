import React, { useState } from 'react';
import {AnimalContent} from '../arrays/AnimalContent';


function FirstTextSection(){

    const [clicked, setClicked] = useState('Panda');
    
    const HandleClick = (name) => {

        setClicked(name);

    }


    return <section className='text-section' id='mounting'>
        <h2 className='section-heading'>Help us save the animals</h2>
        <div className='animals-outter'>
            {AnimalContent.map((animal, index) => {
                return <div className='animals-inner' onClick={() => HandleClick(animal.name)} key={index}>
                <img src={animal.icon} className='animal-head' alt={animal.name}/>
                <h2 className='animals-header'>{animal.name}</h2>
                <p>
                {animal.text}
                </p>
            </div>
            })}
        </div>
        <div className='info-div'>
        {AnimalContent.map((animal, index) => {
                return <div key={index} className='info-outter'>
                    {clicked === animal.name && (
                        <div className='info-inner' style={{backgroundImage: 'url(' + animal.image + ')'}}>
                            <p className='info-text'>{animal.info}</p>
                        </div>
                    )}
            </div>
            })}
        </div>
    </section>
}

export default FirstTextSection;