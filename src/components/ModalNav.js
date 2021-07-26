import React from 'react';
import '../styles/ModalNav.css';
import * as web3 from 'web3';
import Imagenes from '../resources/Imagenes';

const Modal = ( {isOpen, closeModal} ) => {
    const connect = () => {
        if(window.ethereum){
            window.ethereum.enable();
            console.log("Conectandose...");
        }else{
            console.log("No Conectado");
        }
    }
    return ( 
        <div className={`modalnav ${ isOpen && "modalnav-open" }`}>
            <div className="modalnav-style">
                <button onClick={closeModal} className="boton-close">X</button>
                <h4>Conecta tu billetera con Metamask</h4>
                <img src={Imagenes.logometamask}></img>
                <button onClick={connect} className="item-modal">Conectar Billetera</button>
                <a href="https://store.steampowered.com/agecheck/app/381210/"className="item-modal" 
                target="_blank" rel="noreferrer">Comprar juego en STEAM</a>
            </div>
        </div>
     );
}
 
export default Modal;