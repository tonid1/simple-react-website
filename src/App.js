import './App.css';
import React from 'react';
import Header from './components/Header';
import UpperSlider from './components/UpperSlider';
import {SliderContent} from './arrays/SliderContent';
import FirstTextSection from './components/FirstTextSection';
import SecondSlider from './components/SecondSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className='mockup-body'>
            <Header />
            <UpperSlider slides={SliderContent} />
            <FirstTextSection />
            <div className='middle-div'>
              <h2 className='middle-div-text'>
                There are hundreds more endangered species on Earth.
              </h2>
            </div>
            <SecondSlider />
            <Footer />
        </div>
  );
}

export default App;