import React,{useState} from 'react';
import './styles/index.css';
import './styles/Nav.css';
import './styles/Info.css';
import './styles/Cards.css';
import './styles/Footer.css';
import Imagenes from './resources/Imagenes';
import Nav from './components/Nav.jsx';
import Slider from './components/Slider';
import Info from './components/Info';
import Survivors from './components/Survivors';
import Killers from './components/Killers';
import Avatars from './components/Avatars';
import Footer from './components/Footer';

function App() {
  return (
    <div id="inicio">
      <div className="App">
        <Nav />
        <br></br>
        <Slider />
        <Info />
          <hr className="separador-titulo" id="title1"></hr>
          <div className="title">
            <h1>Survivors</h1>
            <img src={Imagenes.logo1}></img>
          </div>
        <Survivors />
          <hr className="separador-titulo" id="title2"></hr>
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
