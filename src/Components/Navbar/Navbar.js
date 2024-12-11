import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [NavComponent, setNavComponent] = useState();
  const [activeBtn, setActiveBtn] = useState("");
  const navigate = useNavigate();

  const handleActive = (btnName) => {
    setActiveBtn(btnName);
  };

  const modelYesBtn = () => {
    navigate("/logout");
  };

  useEffect(() => {
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "admin"
    ) {
      setNavComponent(
        <>
          {/* <!--Admin Navbar Start --> */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a className="navbar-brand d-flex align-items-center px-4 px-lg-5">
              <Link to="/">
                <h2 className="m-0 text-primary">
                  <img src="img/hammer-Photoroom.png" height={35} alt="" />
                  &nbsp;<span style={{ color: "black" }}>e</span>Auction
                </h2>
              </Link>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/admin">
                  <a
                    className={
                      activeBtn === "admin"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("admin");
                    }}
                  >
                    Admin Home
                  </a>
                </Link>
                <Link to="/manageuser">
                  <a
                    className={
                      activeBtn === "manageuser"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("manageuser");
                    }}
                  >
                    Manage User
                  </a>
                </Link>
                <div
                  className="nav-item dropdown"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    className={
                      activeBtn === "addcategory" ||
                      activeBtn === "addsubcategory"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                  >
                    Manage category
                  </a>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to="/addcategory">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("addcategory");
                        }}
                      >
                        Add-Category
                      </a>
                    </Link>
                    <Link to="/addsubcategory">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("addsubcategory");
                        }}
                      >
                        Add-Sub-Category
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="nav-item dropdown"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    className={
                      activeBtn === "changepassword" ||
                      activeBtn === "editprofile"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                  >
                    Settings
                  </a>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to="/editprofile">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("editprofile");
                        }}
                      >
                        Edit Profile
                      </a>
                    </Link>
                    <Link to="/changepassword">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("changepassword");
                        }}
                      >
                        Change Password
                      </a>
                    </Link>
                  </div>
                </div>
                <Link>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={
                      activeBtn === "logout"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </nav>
          {/* <!--Admin Navbar End --> */}
        </>
      );
    } else if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("role") === "user"
    ) {
      setNavComponent(
        <>
          {/* <!--User Navbar Start --> */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a className="navbar-brand d-flex align-items-center px-4 px-lg-5">
              <Link to="/">
                <h2 className="m-0 text-primary">
                  <img src="img/hammer-Photoroom.png" height={35} alt="" />
                  &nbsp;<span style={{ color: "black" }}>e</span>Auction
                </h2>
              </Link>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/user">
                  <a
                    className={
                      activeBtn === "user"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("user");
                    }}
                  >
                    User Home
                  </a>
                </Link>
                <Link to="/categories">
                  <a
                    className={
                      activeBtn === "search"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("search");
                    }}
                  >
                    View Product
                  </a>
                </Link>
                <Link to="/addproduct">
                  <a
                    className={
                      activeBtn === "addproduct"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("addproduct");
                    }}
                  >
                    Add Product
                  </a>
                </Link>
                <Link to="/bidproductlist">
                  <a
                    className={
                      activeBtn === "bidproductlist"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link" 
                    }
                    onClick={() => {
                      handleActive("bidproductlist");
                    }}
                  >
                    View Bid Product
                  </a>
                </Link>
                <div
                  className="nav-item dropdown"
                  style={{ cursor: "pointer" }}
                >
                  <a
                    className={
                      activeBtn === "changepassword" ||
                      activeBtn === "editprofile"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                  >
                    Settings
                  </a>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to="/editprofile">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("editprofile");
                        }}
                      >
                        Edit Profile
                      </a>
                    </Link>
                    <Link to="/changepassword">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("changepassword");
                        }}
                      >
                        Change Password
                      </a>
                    </Link>
                  </div>
                </div>
                <Link>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="nav-item nav-link"
                  >
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          </nav>
          {/* <!--User Navbar End --> */}
        </>
      );
    } else {
      setNavComponent(
        <>
          {/* <!-- Navbar Start --> */}
          <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a className="navbar-brand d-flex align-items-center px-4 px-lg-5">
              <Link to="/">
                <h2 className="m-0 text-primary">
                  <img src="img/hammer-Photoroom.png" height={35} alt="" />
                  &nbsp;<span style={{ color: "black" }}>e</span>Auction
                </h2>
              </Link>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/">
                  <a
                    className={
                      activeBtn === "home"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("home");
                    }}
                  >
                    Home
                  </a>
                </Link>
                <Link to="/about">
                  <a
                    className={
                      activeBtn === "about"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("about");
                    }}
                  >
                    About
                  </a>
                </Link>
                <Link to="/service">
                  <a
                    className={
                      activeBtn === "service"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("service");
                    }}
                  >
                    Service
                  </a>
                </Link>
                <div className="nav-item dropdown">
                  <a
                    className={
                      activeBtn === "features" || activeBtn === "team"
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu fade-up m-0">
                    <Link to="/features">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("features");
                        }}
                      >
                        Features
                      </a>
                    </Link>
                    <Link to="/team">
                      <a
                        className="dropdown-item"
                        onClick={() => {
                          handleActive("team");
                        }}
                      >
                        Our Team
                      </a>
                    </Link>
                  </div>
                </div>
                <Link to="/contact">
                  <a
                    className={
                      activeBtn === "contact"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("contact");
                    }}
                  >
                    Contact
                  </a>
                </Link>
                <Link to="/register">
                  <a
                    className={
                      activeBtn === "register"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("register");
                    }}
                  >
                    Register
                  </a>
                </Link>
                <Link to="/login">
                  <a
                    className={
                      activeBtn === "login"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                    onClick={() => {
                      handleActive("login");
                    }}
                  >
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </nav>

          {/* <!-- Navbar End --> */}
        </>
      );
    }
  });

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Logout
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Are you sure you want to logout ?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <Link>
                <a
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    modelYesBtn();
                  }}
                >
                  Yes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {NavComponent}
    </>
  );
}

export default Navbar;
