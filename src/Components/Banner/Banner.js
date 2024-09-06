import "./Banner.css";

function Banner() {
    return (
        <>
 {/* Carousel Start */}
 <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="./img/banner4.jpg" height="500" width="1920" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"max-width":"900px"}}>
                            <h5 className="text-white text-uppercase">Buy & Sell Anything</h5>
                            <h1 className="display-1 text-white mb-md-4">We Provide Solution On Your Products</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="./img/banner3.jpg" height="500" width="1920" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"max-width":"900px"}}>
                            <h5 className="text-white text-uppercase">Buy & Sell Anything</h5>
                            <h1 className="display-1 text-white mb-md-4">We Provide Solution On Your Products</h1>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="./img/banner6.jpg" height="500" width="1920" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{"max-width":"900px"}}>
                            <h5 className="text-white text-uppercase">Buy & Sell Anything</h5>
                            <h1 className="display-1 text-white mb-md-4">We Provide Solution On Your Products</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Carousel End */}
        </>
    )
}

export default Banner;