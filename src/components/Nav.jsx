import React from 'react';
import Imagenes from '../resources/Imagenes';
const Nav = () => {
    return ( 
        <header>
            <nav className="container-nav">
                <a href={<Nav/>}><img src={Imagenes.logodbd}></img></a>
                <a href="#inicio"><p id="ini" className="p-responsive2">Inicio</p></a>
                <a href="#info_carousel-indicators"><p className="p-responsive">Info</p></a>
                <a href="#title1"><p className="p-responsive">Survivors</p></a>
                <a href="#title2"><p className="p-responsive">Killers</p></a>
                <a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/" target="_blank" rel="noreferrer">
                <p className="buy">COMPRAR JUEGO</p></a>
            </nav>
        </header>
     );
}

export default Nav;