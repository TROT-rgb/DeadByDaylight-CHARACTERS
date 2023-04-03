import Imagenes from '../resources/Imagenes';

const Avatars = ({Avatar}) => {

    return ( 
        <div className="card-container">
            <a href="#">
                <figure>
                    <img src={Avatar.id} className="face"></img>
                    <figcaption className="back">
                        <h3>{Avatar.nombre}</h3>
                        <hr></hr>
                        <p>{Avatar.info}</p>
                    </figcaption>
                </figure>
            </a>
        </div>

     );
}
 
export default Avatars;