import "./Service.css";

function Service() {
  return (
    <>
      {/* <!-- Service Start --> */}
      <div className="container-xxl bg-light py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <div className="overflow-hidden">
                  <img className="img-fluid"  src="img/service1.jpg" alt="" />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Auction by value</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <div className="overflow-hidden">
                  <img className="img-fluid"  src="img/service2.jpg" alt="" />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Auction by Category</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/service3.jpg" alt="" />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">24/7 Customer service</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a className="fw-medium" href="/">
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </>
  );
}

export default Service;
