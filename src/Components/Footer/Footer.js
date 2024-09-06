import { Link } from "react-router-dom";
import "./Footer.css";
import { useEffect, useState } from "react";

function Footer() {
  const [footerContent, setFooterContent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "admin"
    ) {
      setFooterContent(
        <>
          <div className="container-fluid bg-dark text-light footer wow fadeIn">
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;{" "}
                    <a className="border-bottom" href="#">
                      eAuction
                    </a>
                    , All Right Reserved.
                  </div>
                  <div className="col-md-4 text-center text-md-end">
                    Designed By{" "}
                    <a className="border-bottom" href="/">
                      Deepak Upadhyay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "user"
    ) {
      setFooterContent(
        <>
          <div className="container-fluid bg-dark text-light footer wow fadeIn">
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;{" "}
                    <a className="border-bottom" href="#">
                      eAuction
                    </a>
                    , All Right Reserved.
                  </div>
                  <div className="col-md-4 text-center text-md-end">
                    Designed By{" "}
                    <a className="border-bottom" href="/">
                      Deepak Upadhyay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      setFooterContent(
        <>
          {/* <!-- Footer Start --> */}
          <div className="container-fluid bg-dark text-light footer pt-3 wow fadeIn">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-4 col-md-12">
                  <h4 className="text-light mb-4">Address</h4>
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt me-3"></i>123 Street,
                    Indore, India
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-phone-alt me-3"></i>+XXX XXX XXXX
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-envelope me-3"></i>eAuction@gmail.com
                  </p>
                  <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="/">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12"></div>
                <div className="col-lg-4 col-md-12">
                  <h4 className="text-light mb-4">Quick Links</h4>
                  <Link to="/about">
                    <a className="btn btn-link">About Us</a>
                  </Link>
                  <Link to="/contact">
                    <a className="btn btn-link">Contact Us</a>
                  </Link>
                  <Link to="/service">
                    <a className="btn btn-link">Our Services</a>
                  </Link>
                  <Link to="/team">
                    <a className="btn btn-link">Terms & Condition</a>
                  </Link>
                  <Link to="/contact">
                    <a className="btn btn-link">Support</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;{" "}
                    <a className="border-bottom" href="#">
                      eAuction
                    </a>
                    , All Right Reserved.
                  </div>
                  <div className="col-md-4 text-center text-md-end">
                    Designed By{" "}
                    <a className="border-bottom" href="/">
                      Deepak Upadhyay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer End --> */}
        </>
      );
    }
  });

  return <>{footerContent}</>;
}

export default Footer;
