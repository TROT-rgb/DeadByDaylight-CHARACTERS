import Imagenes from '../resources/Imagenes';

const Slider = () => {
    
    return ( 
        <div className="container-slider">
            <div id="carousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="https://www.youtube.com/watch?v=ZhXXU0efIEQ" target="_blank" rel="noreferrer">
                            <img src={Imagenes.slider1} alt="" ></img></a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://www.youtube.com/watch?v=SyqgEK0CEVE" target="_blank" rel="noreferrer">
                            <img src={Imagenes.slider2} alt="" ></img></a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://www.youtube.com/watch?v=ov1i5TYUTJg" target="_blank" rel="noreferrer">
                            <img src={Imagenes.slider3} alt="" ></img></a>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

                <ol className="carousel-indicators" id="info_carousel-indicators">
                    <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel1" data-slide-to="1"></li>
                    <li data-target="#carousel1" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
     );
}
 
export default Slider;