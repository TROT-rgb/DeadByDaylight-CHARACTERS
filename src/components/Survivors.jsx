import React,{useState} from 'react';
import Imagenes from '../resources/Imagenes';
import Avatars from './Avatars';

const Survivors = () => {
    
    const [ Pjs , guardarPjs ] = useState ([
        { id:Imagenes.surv1 , nombre:"Dwight" , info:"Fue presentado como miembro del Survivor Quartet original que se lanzó con el Juego el 14 de junio de 2016."},
        { id:Imagenes.surv2 , nombre:"Meg"  , info:"Fue presentada como miembro del Survivor Quartet original que se lanzó con el Juego el 14 de junio de 2016"},
        { id:Imagenes.surv3 , nombre:"Cloudette" , info:"Fue presentada como miembro del Survivor Quartet original que se lanzó con el Juego el 14 de junio de 2016." },
        { id:Imagenes.surv4 , nombre:"Jake"  , info:"Fue presentado como miembro del Survivor Quartet original que se lanzó con el Juego el 14 de junio de 2016."},
        { id:Imagenes.surv5 , nombre:"Nea" , info:"Fue presentada como la Superviviente del CAPÍTULO I: El Capítulo del Último Aliento, un DLC del Capítulo lanzado el 18 de agosto de 2016."},
        { id:Imagenes.surv6 , nombre:"Laurie"  , info:"Fue presentada como la Superviviente del CAPÍTULO II: El Capítulo de HALLOWEEN®, un DLC del Capítulo lanzado el 25 de octubre de 2016.Tiene su origen en la película de terror de 1978 Halloween."},
        { id:Imagenes.surv7 , nombre:"Ace"  , info:"Fue presentado como el Superviviente del CAPÍTULO III: De carne y barro, un DLC del capítulo lanzado el 8 de diciembre de 2016."},
        { id:Imagenes.surv8 , nombre:"Bill"  , info:"Fue presentado con PARAGRAPH I: Left Behind, un DLC de párrafo originalmente exclusivo para PC lanzado el 8 de marzo de 2017.Bill es un personaje del popular juego de zombies de 2008, Left 4 Dead."},
        { id:Imagenes.surv9 , nombre:"Feng"  , info:"Fue presentada como la Superviviente del CAPÍTULO IV: Spark of Madness, un DLC del capítulo lanzado el 11 de mayo de 2017."},
        { id:Imagenes.surv10 , nombre:"David"  , info:"Fue presentado como el Superviviente del CAPÍTULO V: Una canción de cuna para la oscuridad, un DLC del capítulo lanzado el 27 de julio de 2017."},
        { id:Imagenes.surv11 , nombre:"Quentin"  , info:"Fue presentado como el Superviviente del CAPÍTULO VI: Pesadilla en Elm Street ™, un DLC del capítulo lanzado el 26 de octubre de 2017.Tiene su origen en la nueva versión de 2010 de la película de terror, A Nightmare on Elm Street."},
        { id:Imagenes.surv12 , nombre:"Tapp"  , info:"Fue presentado como el Superviviente de CHAPTER VII: The SAW ™ Chapter, un DLC del capítulo lanzado el 23 de enero de 2018.Se origina en la franquicia de películas de terror de 2004 del mismo nombre, SAW."},
        { id:Imagenes.surv13 , nombre:"Kate" , info:"Fue presentada como la Superviviente del CAPÍTULO VIII: Llamada al telón, un DLC del capítulo lanzado el 12 de junio de 2018." },
        { id:Imagenes.surv14 , nombre:"Adam"  , info:"Fue presentado como el Superviviente del CAPÍTULO IX: Línea de sangre destrozada, un DLC del capítulo lanzado el 18 de septiembre de 2018."},
        { id:Imagenes.surv15 , nombre:"Jeff"  , info:"Fue presentado como el Superviviente del CAPÍTULO IX: Línea de sangre destrozada, un DLC del capítulo lanzado el 18 de septiembre de 2018."},
        { id:Imagenes.surv16 , nombre:"Jane"  , info:"Fue presentada como la Superviviente del CAPÍTULO XI: La muerte de los fieles, un DLC del capítulo lanzado el 19 de marzo de 2019."},
        { id:Imagenes.surv17 , nombre:"Ash" , info:"Fue presentado con PARAGRAPH III: Ash vs Evil Dead, un DLC de párrafo lanzado el 2 de abril de 2019.Tiene su origen en la serie de televisión de terror y comedia de 2015, Ash vs Evil Dead." },
        { id:Imagenes.surv18 , nombre:"Nancy"  , info:"Fue presentada como una de los dos Supervivientes del CAPÍTULO XIII: Cosas más extrañas, un DLC del capítulo lanzado el 17 de septiembre de 2019.Es originaria de la serie de televisión web de ciencia ficción y terror de 2016 Stranger Things."},
        { id:Imagenes.surv19 , nombre:"Steve"  , info:"Fue presentado como uno de los dos Supervivientes del CAPÍTULO XIII: Cosas más extrañas, un DLC del capítulo lanzado el 17 de septiembre de 2019.Es originario de la serie de televisión web de ciencia ficción y terror de 2016 Stranger Things."},
        { id:Imagenes.surv20 , nombre:"Yui" , info:"Fue presentada como la Superviviente del CAPÍTULO XIV: Legado Maldito, un DLC del Capítulo lanzado el 3 de diciembre de 2019." },
        { id:Imagenes.surv21 , nombre:"Zarina" , info:"Fue presentada como la Superviviente del CAPÍTULO XV: Cadenas de odio, un DLC del capítulo lanzado el 10 de marzo de 2020." },
        { id:Imagenes.surv22 , nombre:"Cheryl" , info:"Fue presentada como la Superviviente del CAPÍTULO XVI: Silent Hill, un DLC del capítulo lanzado el 16 de junio de 2020.Ella es originaria de la franquicia de videojuegos Silent Hill, específicamente Silent Hill (1999) & Silent Hill 3 (2003)." },
        { id:Imagenes.surv23 , nombre:"Felix"  , info:"Fue presentado como el Superviviente del CAPÍTULO XVII: Descendiendo más allá, un DLC del capítulo lanzado el 8 de septiembre de 2020."},
        { id:Imagenes.surv24 , nombre:"Élodie"  , info:"Fue presentada como la Superviviente del CAPÍTULO XVIII: A Binding of Kin, un DLC del Capítulo el 1 de diciembre de 2020."},
        { id:Imagenes.surv25 , nombre:"Yun-jin" , info:"Fue presentada como la Superviviente del CAPÍTULO XIX: All-Kill, un DLC del capítulo lanzado el 30 de marzo de 2021." },
        { id:Imagenes.surv26 , nombre:"Jill" , info:"Fue presentada como una de los dos Supervivientes del CAPÍTULO XX: Resident Evil, un DLC del capítulo lanzado el 15 de junio de 2021.Se origina en la franquicia de videojuegos Resident Evil, específicamente en el remake de Resident Evil 3 de 2020." },
        { id:Imagenes.surv27 , nombre:"Leon"  , info:"Fue presentado como uno de los dos Supervivientes del CAPÍTULO XX: Resident Evil, un DLC del capítulo lanzado el 15 de junio de 2021.Se origina en la franquicia de videojuegos Resident Evil, específicamente en el remake de Resident Evil 2 de 2019."},
    ]);

    return ( 
        <section className="container">
            {Pjs.map(Pjs =>(
                <Avatars 
                    Avatar={Pjs}
                />
            ))}
        </section>
     );
}
 
export default Survivors;