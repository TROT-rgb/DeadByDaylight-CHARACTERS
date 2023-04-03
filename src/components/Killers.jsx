import React,{useState} from 'react';
import Imagenes from '../resources/Imagenes';
import Avatars from './Avatars';

const Killers = () => {

    const[Kils,guardarKils] = useState ([
        {id:Imagenes.kils1 , nombre:"Trapper" , info:"Fue presentado como miembro del Killer Trio original que se lanzó con el juego el 14 de junio de 2016."},
        {id:Imagenes.kils2 , nombre:"Wraith" , info:"Fue presentado como miembro del Killer Trio original que se lanzó con el juego el 14 de junio de 2016."},
        {id:Imagenes.kils3 , nombre:"Hillbilly" , info:"Fue presentado como miembro del Killer Trio original que se lanzó con el juego el 14 de junio de 2016."},
        {id:Imagenes.kils4 , nombre:"Nurse" , info:"Fue presentada como la Asesina del CAPÍTULO I: El Capítulo del Último Aliento, un DLC del Capítulo lanzado el 18 de agosto de 2016."},
        {id:Imagenes.kils5 , nombre:"Shape" , info:"Fue presentado como el Asesino del CAPÍTULO II: El Capítulo de HALLOWEEN®, un DLC del Capítulo lanzado el 25 de octubre de 2016.Se origina en la franquicia de películas de terror de 1978 con el mismo nombre, Halloween."},
        {id:Imagenes.kils6 , nombre:"Hag" , info:"Fue presentada como la Asesina del CAPÍTULO III: De carne y barro, un DLC del capítulo lanzado el 8 de diciembre de 2016."},
        {id:Imagenes.kils7 , nombre:"Doctor" , info:"Fue presentado como el asesino del CAPÍTULO IV: Spark of Madness, un DLC del capítulo lanzado el 11 de mayo de 2017."},
        {id:Imagenes.kils8 , nombre:"Huntress" , info:"Fue presentada como la Asesina del CAPÍTULO V: Una canción de cuna para la oscuridad, un DLC del capítulo lanzado el 27 de julio de 2017."},
        {id:Imagenes.kils9 , nombre:"Cannibal" , info:"Se le presentó PARAGRAPH II: LEATHERFACE ™, un DLC de párrafo lanzado el 14 de septiembre de 2017.Es originario de la franquicia de películas de terror de 1974 The Texas Chainsaw Massacre."},
        {id:Imagenes.kils10 , nombre:"Nightmare" , info:"Fue presentado como el asesino del CAPÍTULO VI: Pesadilla en Elm Street ™, un contenido descargable del capítulo lanzado el 26 de octubre de 2017.Tiene su origen en el remake de 2010 de la película de terror del mismo nombre, A Nightmare on Elm Street."},
        {id:Imagenes.kils11 , nombre:"Pig" , info:"Fue presentada como la Asesina del CAPÍTULO VII: El Capítulo SAW ™, un DLC del Capítulo lanzado el 23 de enero de 2018.Se origina en la franquicia de películas de terror de 2004 del mismo nombre, SAW."},
        {id:Imagenes.kils12 , nombre:"Clown" , info:"Fue presentado como el Asesino del CAPÍTULO VIII: Llamada al telón, un DLC del capítulo lanzado el 12 de junio de 2018."},
        {id:Imagenes.kils13 , nombre:"Spirit" , info:"Fue presentada como la Asesina del CAPÍTULO IX: Línea de sangre destrozada, un DLC del capítulo lanzado el 18 de septiembre de 2018."},
        {id:Imagenes.kils14 , nombre:"Legion" , info:"Fueron presentados como el Asesino del CAPÍTULO X: La oscuridad entre nosotros, un DLC del capítulo lanzado el 11 de diciembre de 2018."},
        {id:Imagenes.kils15 , nombre:"Plague" , info:"Fue presentada como la Asesina del CAPÍTULO XI: Demise of the Faithful, un DLC del capítulo lanzado el 19 de marzo de 2019."},
        {id:Imagenes.kils16 , nombre:"Ghost Face" , info:"Fue presentado como el Asesino del CAPÍTULO XII: Ghost Face®, un DLC del capítulo lanzado el 18 de junio de 2019."},
        {id:Imagenes.kils17 , nombre:"Demogorgon" , info:"Se presentó como el Asesino del CAPÍTULO XIII: Cosas más extrañas, un DLC del capítulo lanzado el 17 de septiembre de 2019.Se origina en la serie de televisión web de ciencia ficción y terror de 2016 Stranger Things."},
        {id:Imagenes.kils18 , nombre:"Oni" , info:"Fue presentado como el Asesino del CAPÍTULO XIV: Legado Maldito, un DLC del Capítulo lanzado el 3 de diciembre de 2019."},
        {id:Imagenes.kils19 , nombre:"Deathslinger" , info:"Fue presentado como el Asesino del CAPÍTULO XV: Cadenas de odio, un DLC del capítulo lanzado el 10 de marzo de 2020."},
        {id:Imagenes.kils20 , nombre:"Executioner" , info:"Fue presentado como el Asesino del CAPÍTULO XVI: Silent Hill, un DLC del capítulo lanzado el 16 de junio de 2020.Se origina en la franquicia de videojuegos Silent Hill, específicamente Silent Hill 2 (2001)."},
        {id:Imagenes.kils21 , nombre:"Blight" , info:"Fue presentado como el Asesino del CAPÍTULO XVII: Descendiendo más allá, un DLC del capítulo lanzado el 8 de septiembre de 2020."},
        {id:Imagenes.kils22 , nombre:"Twins" , info:"Fueron presentados como The Killer of CHAPTER XVIII: A Binding of Kin, un DLC del capítulo lanzado el 1 de diciembre de 2020."},
        {id:Imagenes.kils23 , nombre:"Trickster" , info:"Fue presentado como el Asesino del CAPÍTULO XIX: All-Kill, un DLC del capítulo lanzado el 30 de marzo de 2021."},
        {id:Imagenes.kils24 , nombre:"Nemesis" , info:"Fue presentado como el Asesino del CAPÍTULO XX: Resident Evil, un DLC del capítulo lanzado el 15 de junio de 2021.Se origina en la franquicia de videojuegos Resident Evil, específicamente en el remake 2020 de Resident Evil 3."},
        {id:Imagenes.kils25 , nombre:"Cenobita" , info:"Fue presentado como el Asesino del CAPÍTULO 21: Hellraiser™ , un Capítulo DLC lanzado el 7 de septiembre de 2021."},
        {id:Imagenes.kils26 , nombre:"Artista" , info:"Fue presentada como la Asesina del CAPÍTULO 22: Retrato de un asesinato , un capítulo DLC lanzado el 30 de noviembre de 2021."},
        {id:Imagenes.kils27 , nombre:"Onryō" , info:"Fue presentada como la Asesina del CAPÍTULO 23: Sadako Rising , un Capítulo DLC lanzado el 8 de marzo de 2022."},
        {id:Imagenes.kils28 , nombre:"Draga" , info:"Se presentó como el Asesino del CAPÍTULO 24: Roots of Dread , un Capítulo DLC lanzado el 7 de junio de 2022."},
        {id:Imagenes.kils29 , nombre:"Mastermind" , info:"Fue presentado como el Asesino del CAPÍTULO 25: Resident Evil™: PROYECTO W , un capítulo DLC lanzado el 30 de agosto de 2022."},
    ]);


    return ( 
        <section className="container">
            {Kils.map(Kils =>(
                <Avatars 
                    Avatar={Kils}
                />
            ))}
        </section>
     );
}
 
export default Killers;