import React, {useState} from 'react';
import Imagenes from '../resources/Imagenes';
import ModalNav from './ModalNav';

const Nav = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal (true);
    }
    const closeModal = () => {
        setIsOpenModal (false);
    }

    return ( 
        <header>
            <ModalNav 
                    isOpen={isOpenModal} 
                    closeModal={closeModal}
                />
            <nav className="container-nav">
                <a href={<Nav/>}><img src={Imagenes.logodbd}></img></a>
                <a href="#inicio"><p id="ini" className="p-responsive2">Inicio</p></a>
                <a href="#info_carousel-indicators"><p className="p-responsive">Info</p></a>
                <a href="#title1"><p className="p-responsive">Survivors</p></a>
                <a href="#title2"><p className="p-responsive">Killers</p></a>
                <div>
                    <button onClick={openModal} className="buy">COMPRAR JUEGO</button>
                </div>
            </nav>
        </header>
     );
}

export default Nav;