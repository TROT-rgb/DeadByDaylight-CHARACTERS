import React, {useState} from 'react';
import { Link } from 'react-scroll';
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
                <Link to="inicio" spy={true} smooth={true} offset={50} duration={500}><p id="ini" className="p-responsive2">Inicio</p></Link>
                <Link to="title0" spy={true} smooth={true} offset={50} duration={500}><p className="p-responsive2">Info</p></Link>
                <Link to="title1" spy={true} smooth={true} offset={50} duration={500}><p className="p-responsive">Survivors</p></Link>
                <Link to="title2" spy={true} smooth={true} offset={50} duration={500}><p className="p-responsive">Killers</p></Link>
                <Link to="title3" spy={true} smooth={true} offset={50} duration={500}><p className="p-responsive">Dlcs</p></Link>
                <div>
                    <button onClick={openModal} className="buy">COMPRAR JUEGO</button>
                </div>
            </nav>
        </header>
     );
}

export default Nav;