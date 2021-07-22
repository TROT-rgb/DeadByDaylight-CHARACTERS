import React from 'react';
import Imagenes from '../resources/Imagenes';

const Info = () => {
    return ( 
        <section className='container-info'>
            <article className='info-article'>
                <div>  
                    <h1>Dead By Daylight</h1>
                    <br></br>
                    <p>Para los que no conozcan 'Dead by Daylight' se trata de un título multijugador de 4vs1. 
                    El jugador que va en solitario toma el papel de un despiadado asesino que junto a sus 
                    armas, trampas y habilidades, deberá dar caza al resto de personas encarnarán a un grupo
                    de humanos. La única opción que tendrán ellos de sobrevivir será huir, esconderse y 
                    encender unos generadores para abrir la salida del mapa y escapar con vida.
                    El trabajo en equipo será esencial en todo momento, sobre todo porque los mapas disponen 
                    de un tamaño bastante considerable y es fácil llegar a perderse, aunque a los asesinos 
                    también les perjudicará este detalle a la hora de encontrar a sus víctimas.</p>
                </div>
                <img src={Imagenes.info1}></img>
            </article>
            <br></br>
            <hr className="line"></hr>
            <article className='info-article'>
                <img src={Imagenes.info2}></img>
                <div>
                    <h2>Argumento</h2>
                    <br></br>
                    <p>Los sobrevivientes son arrastrados al mundo construido por El Ente cuando deambulan demasiado 
                    cerca de los lugares de donde fueron sacados los asesinos, desapareciendo del mundo real sin 
                    dejar rastro. Terminan en una fogata solitaria, donde descansan entre pruebas, hasta que un 
                    asesino los persigue de nuevo. Cada prueba se lleva a cabo en una serie de reinos creados por El 
                    Ente desde áreas de donde fueron extraídos los sobrevivientes. La única esperanza de escape de 
                    los sobrevivientes es reparar una serie de generadores diseminados por cada reino y continuar 
                    abriendo una gran puerta para escapar. Escapar de los terrenos siempre lleva a los sobrevivientes
                    a la hoguera, y se pueden crear ofrendas para ser quemadas y apelar a favor de El Ente. Dado que
                    este se alimenta de la esperanza de que los sobrevivientes escapen, les ayuda tanto como a los 
                    asesinos, actuando como un observador imparcial de la caza, interviniendo solo para reclamar a 
                    los colgados en los ganchos.</p>
                </div>
            </article>
            <div className='videoyt'>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/ZhXXU0efIEQ?" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>
            </div>
        </section>


     );
}
 
export default Info;
