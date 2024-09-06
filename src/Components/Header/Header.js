import Authentication from "../Other-Components/Authentication";
import "./Header.css";
import { useCallback, useEffect, useState } from "react";

function Header() {
  const [headerContent, setHeaderContent] = useState();
  const [triggerFetch, setTriggerFetch] = useState(false);

  const myHeaderFunction = useCallback((token, role) => {
    setTriggerFetch(!triggerFetch);
    if (token !== undefined && role === "admin") {
      return (
        <>
          <div className="container-fluid bg-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-envelope text-primary me-2"></small>
                  <small>{localStorage.getItem("email")}</small>
                </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-user-alt text-primary me-2"></small>
                  <small>Welcome {localStorage.getItem("name")}</small>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else if (token !== undefined && role === "user") {
      setTriggerFetch(!triggerFetch);
      return (
        <>
          <div className="container-fluid bg-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-envelope text-primary me-2"></small>
                  <small>{localStorage.getItem("email")}</small>
                </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-user-alt text-primary me-2"></small>
                  <small>Welcome {localStorage.getItem("name")}</small>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      setTriggerFetch(!triggerFetch);
      return (
        <>
          {/* Topbar Start */}
          <div className="container-fluid bg-light p-0">
            <div className="row gx-0 d-none d-lg-flex">
              <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-map-marker-alt text-primary me-2"></small>
                  <small>123 Street, Indore, India</small>
                </div>
              </div>
              <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                  <small className="fa fa-phone-alt text-primary me-2"></small>
                  <small>+XXX XXX XXXX</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                  <a
                    className="btn btn-sm-square bg-white text-primary me-1"
                    href="/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white text-primary me-1"
                    href="/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white text-primary me-1"
                    href="/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white text-primary me-0"
                    href="/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
        </>
      );
    }

  },[triggerFetch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = myHeaderFunction(
          localStorage.getItem("token"),
          localStorage.getItem("role")
        );
        setHeaderContent(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [myHeaderFunction]);


  return (
    <>
      <Authentication />
      {headerContent}
    </>
  );
}

export default Header;
