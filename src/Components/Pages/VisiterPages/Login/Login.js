import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginUserApi } from "../../../../ApiUrls";
import { CaptchaBox, validateCaptcha } from "react-captcha-lite";
import Alert from "../../../Other-Components/Alert";

function Login() {
  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [captcha, setCaptcha] = useState();
  const [output, setOutput] = useState();

  const handleLogin = () => {
    if (!email) {
      setOutput("* Email is required");
      setTimeout(() => {
        setOutput("");
      }, 3000);
    } else if (!password) {
      setOutput("* Password is required");
      setTimeout(() => {
        setOutput("");
      }, 3000);
    } else if (!captcha) {
      setOutput("* captcha is required");
      setTimeout(() => {
        setOutput("");
      }, 3000);
    } else {
      var userInput = document.getElementById("captchaData").value;
      if (validateCaptcha(userInput)) {
        showAlert("success", "CAPTCHA validation successful");
        var userDetail = { email: email, password: password };
        axios
          .post(LoginUserApi, userDetail)
          .then((result) => {
            var user = result.data.userDetails;
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("_id", user._id);
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            localStorage.setItem("mobile", user.mobile);
            localStorage.setItem("address", user.address);
            localStorage.setItem("city", user.city);
            localStorage.setItem("gender", user.gender);
            localStorage.setItem("role", user.role);
            localStorage.setItem("info", user.info);
            user.role === "admin" ? navigate("/admin") : navigate("/user");
          })
          .catch((error) => {
            // setOutput(error.response.data.status);
            showAlert("danger", "Oops samething went wrong !");
            setTimeout(() => {
              setMyAlert(null);
            }, 3000);
          });
      } else {
        showAlert("danger", "CAPTCHA validation failed");
        setTimeout(() => {
          setMyAlert(null);
        }, 3000);
      }
    }
  };

  const enterNext = (event) => {
    if (event.key === "Enter") {
      document.getElementById("loginBtn").click();
    }
  };

  return (
    <>
      {/* <!-- Login start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            <div className="col-lg-12 quote-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Login Here !</h1>
                  <h5 className="text-danger">{output}</h5>
                </div>

                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-12 col-sm-3">
                      <CaptchaBox />
                    </div>

                    <div className="col-12 col-sm-3">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter Captcha"
                        name="captchaInput"
                        id="captchaData"
                        value={captcha}
                        onChange={(e) => {
                          setCaptcha(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          enterNext(e);
                        }}
                        style={{ height: "55px" }}
                        required
                      />
                    </div>

                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="loginBtn"
                        onClick={() => {
                          handleLogin();
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Login end --> */}
    </>
  );
}

export default Login;
