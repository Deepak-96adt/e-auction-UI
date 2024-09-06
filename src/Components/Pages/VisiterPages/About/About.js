import "./About.css";

function About() {
  return (
    <>
      {/* <!-- About Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ "min-height": "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/banner2.jpg"
                  style={{ "object-fit": "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
            >
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">About Us</h1>
                </div>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4 mb-4 pb-2">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-users fa-2x text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h2 className="text-primary mb-1" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="fw-medium mb-0">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-check fa-2x text-primary"></i>
                      </div>
                      <div className="ms-3">
                        <h2 className="text-primary mb-1" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="fw-medium mb-0">Projects Done</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="btn btn-primary py-3 px-5">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About end --> */}
    </>
  );
}

export default About;
