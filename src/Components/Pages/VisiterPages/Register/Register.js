import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { SaveUserApi } from "../../../../ApiUrls";
import Alert from "../../../Other-Components/Alert";

function Register() {
  const [myAlert , setMyAlert] = useState(null);

  const showAlert = (type,message) =>{
    setMyAlert({
      type:type,
      message:message
    })
  }


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [output, setOutput] = useState();
  const [output1, setOutput1] = useState();

  const [errorEmail, setErrorEmail] = useState(<></>);
  const [errorPassword, setErrorPassword] = useState(<></>);
  const [errorMobile, setErrorMobile] = useState(<></>);

  const handleSubmit = () => {    
    if (!name) {
      setOutput("* Name is required");
    } else if (!email || email.search("@")<=0 || email.indexOf(".")<=0) {
      setOutput("* Email is required (Example : example@gmail.com)");
    } else if (!password) {
      setOutput("* Password is required");
    } else if (!mobile || mobile.length<10 || mobile.length>10) {
      setOutput("* Mobile is required and must be 10 digit");
    } else if (!city) {
      setOutput("* City is required");
    } else if (!gender) {
      setOutput("* Gender is required");
    } else if (!address) {
      setOutput("* Address is required");
    } else {
      
      var userDetail = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        city: city,
        gender: gender,
        address: address,
      };

      axios
        .post(SaveUserApi, userDetail)
        .then((result) => {
          if (result.data.status === "user registered successfully.....") {
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setCity("");
            setGender("");
            setAddress("");
            setOutput("");
            setOutput1("");
            showAlert("success",result?.data?.status);
            setTimeout(() => {
              setMyAlert(null)
            }, 3000);
          }
        })
        .catch((error) => {
          const text = error?.response?.data?.status;
          console.error(text);
          if (text.search("email") > 0) {
            setErrorEmail(
              <span style={{ color: "red" }}>
                Something went wrong with email id{" "}
                <i class="fa fa-info-circle"></i>
              </span>
            );
            setTimeout(() => {
              setErrorEmail("");
            }, 3000);
          }
          if (text.search("password") > 0) {
            setErrorPassword(
              <span style={{ color: "red" }}>
                Something went wrong with password{" "}
                <i class="fa fa-info-circle"></i>
              </span>
            );
            setTimeout(() => {
              setErrorPassword("");
            }, 3000);
          }
          if (text.search("mobile") > 0) {
            setErrorMobile(
              <span style={{ color: "red" }}>
                Something went wrong with mobile number{" "}
                <i class="fa fa-info-circle"></i>
              </span>
            );
            setTimeout(() => {
              setErrorMobile("");
            }, 3000);
          }
          showAlert("danger","Oops something went wrong !!!");
          setTimeout(() => {
            setOutput("");
            setMyAlert(null);
          }, 3000);
        });
    }
  };

  const enterNext = (event) =>{
    if (event.key==="Enter") {
      document.getElementById("submitBtn").click();
    }
  }

  return (
    <>
      {/* <!-- Register start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert}/>
            <div
              className="col-lg-12 quote-text wow fadeIn"
            >
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Register Here !</h1>
                  <h5 className="text-success">{output1}</h5>
                  <h5 className="text-danger">{output}</h5>
                </div>

                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Name"
                        style={{ height: "55px" }}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Email"
                        style={{ height: "55px" }}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {errorEmail}
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Password"
                        style={{ height: "55px" }}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      {errorPassword}
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Mobile"
                        style={{ height: "55px" }}
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                      {errorMobile}
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      >
                        <option defaultValue>Select City</option>
                        <option>Indore</option>
                        <option>Dewas</option>
                        <option>Bhopal</option>
                        <option>Ujjain</option>
                      </select>
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="p-2">
                        <label htmlFor="gender">
                          <b> Gender : </b>
                        </label>
                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="male" style={{ cursor: "pointer" }}>
                          {" "}
                          Male{" "}
                        </label>
                        &nbsp;
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          style={{ cursor: "pointer" }}
                          value="male"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <label htmlFor="female" style={{ cursor: "pointer" }}>
                          Female
                        </label>
                        &nbsp;
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          style={{ cursor: "pointer" }}
                          value="female"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Address"
                        value={address}
                        onKeyDown={(e)=>{
                          enterNext(e);
                        }}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="submitBtn"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Register end --> */}
    </>
  );
}

export default Register;
