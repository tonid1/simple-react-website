import React from 'react';

function Header(){
    return (
        <div className='header-div'>
            <div className='header-logo'>
                <h2 className='logo-text'>Save Us!</h2>
            </div>
            <div className='header-inner'>
                <nav>
                    <ul className='menu'>
                        <li className='menu-item'>
                            <a href='#first-slider'>Slider</a>
                        </li>
                        <li className='menu-item'> 
                            <a href='#mounting'>Mounting</a>
                        </li>
                        <li className='menu-item'>
                            <a href='#carousel'>Carousel</a>
                        </li>
                    </ul>
                </nav>
            </div>            
        </div>
    )
}
export default Header;