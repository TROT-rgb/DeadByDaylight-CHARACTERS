import React from 'react';
import '../styles/ModalNav.css';

const Modal = ( {isOpen, closeModal} ) => {
    return ( 
        <div className={`modalnav ${ isOpen && "modalnav-open" }`}>
            <div className="modalnav-style">
                <button onClick={closeModal} className="boton-close">x</button>
                <h2>LOGIN</h2>
                <input type="text" className="test-modal"></input>
                <input type="text" className="test-modal"></input>
                <input type="text" className="test-modal"></input>
                <input type="submit" className="test-modal"></input>
                <a href="https://store.steampowered.com/agecheck/app/381210/"className="test-modal" 
                target="_blank" rel="noreferrer">comprar juego en steam</a>
            </div>
        </div>
     );
}
 
export default Modal;