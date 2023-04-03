import React from 'react';
import './styles/index.css';
import './styles/Nav.css';
import './styles/Info.css';
import './styles/Cards.css';
import './styles/Footer.css';
import './styles/Slider.css';
import './styles/Dlcs.css';
import Imagenes from './resources/Imagenes';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider';
import Info from './components/Info';
import Survivors from './components/Survivors';
import Killers from './components/Killers';
import Footer from './components/Footer';
import Dlcs from './components/Dlcs';

function App() {
  return (
    <div id="inicio">
      <div className="App">
        <Nav />
        <br></br>
        <Slider />
        <Info />
        <hr className='line2' ></hr>
        <div className='scroll' id="title3"></div>
        <Dlcs />
          <div className='scroll' id="title1"></div>
          <div className="title">
            <h1>Survivors</h1>
            <img src={Imagenes.logo1}></img>
          </div>
        <Survivors />
        <div className='scroll' id="title2"></div>
          <div className="title">
            <h1>Killers</h1>
            <img src={Imagenes.logo2}></img>
          </div>
        <Killers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
