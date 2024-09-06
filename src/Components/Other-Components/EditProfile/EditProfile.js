import { useState } from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FetchUserApi, UpdateUserApi } from "../../../ApiUrls";
import Alert from "../Alert";

function EditProfile() {
  const [myAlert , setMyAlert] = useState(null);

  const showAlert = (type,message) =>{
    setMyAlert({
      type:type,
      message:message
    })
  }
  
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [output, setOutput] = useState();

  function HoverInputToButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <Link
            className="btn btn-primary w-100 py-3"
            type="button"
            id="changePassBtn"
            to="/changepassword"
          >
            Click for Change Password
          </Link>
        ) : (
          <input
            type="password"
            className="form-control border-0"
            placeholder="Password"
            id="passwordBtn"
            style={{ height: "55px" }}
            disabled
          />
        )}
      </span>
    );
  }

  const handleSubmit = () => {
    if (!name) {
      setOutput("* Name is required");
    } else if (!email || email.search("@")<=0 || email.indexOf(".")<=0) {
      setOutput("* Email is required (Example : example@gmail.com)");
    } else if (!mobile || mobile.length<10 || mobile.length>10) {
      setOutput("* Mobile is required and must be 10 digit");
    } else if (!city) {
      setOutput("* City is required");
    } else if (!gender) {
      setOutput("* Gender is required");
    } else if (!address) {
      setOutput("* Address is required");
    } else {
      var content_obj; 
      if (email !== localStorage.getItem("email")) {
        content_obj = {
          name: name,
          email: email,
          mobile: mobile,
          city: city,
          gender: gender,
          address: address,
          // info: Date(),
        };
      }
      content_obj = {
        name: name,
        mobile: mobile,
        city: city,
        gender: gender,
        address: address,
        // info: Date(),
      };

      let condition_obj = {
        condition_obj: { _id: localStorage.getItem("_id") },
        content_obj: content_obj,
      };
      axios
        .patch(UpdateUserApi, condition_obj)
        .then((result) => {
          if (result.data.response === "User updated successfully") {
            setOutput("");
            showAlert("success",name+" Updated Profile Successfully...")
            setTimeout(() => {
              setMyAlert(null);
            }, 3000);
            console.log(result.data.response);
          }

          var condition = { _id: localStorage.getItem("_id") };
          axios
            .get(FetchUserApi, {
              params: {
                condition_obj: condition,
              },
            })
            .then((response) => {
              var user = response.data.userDetails[0];
              localStorage.setItem("name", user.name);
              localStorage.setItem("email", user.email);
              localStorage.setItem("mobile", user.mobile);
              localStorage.setItem("address", user.address);
              localStorage.setItem("city", user.city);
              localStorage.setItem("gender", user.gender);
            })
            .catch((error) => {
              alert(error.response.data.response);
              console.log(error);
            });
        })
        .catch((error) => {
          showAlert("danger","Oops SomeThing went Wrong....!");
          setTimeout(() => {
            setMyAlert(null);
          }, 3000);
          console.log(error);
        });
    }
  };

  return (
    <>
      {/* <!-- EditProfile Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert}/>
            <div className="col-lg-12 quote-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Edit Profile Here !</h1>
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
                      {/* {errorEmail} */}
                    </div>
                    <div className="col-12 col-sm-6">
                      <HoverInputToButton />
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
                      {/* {errorMobile} */}
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
                          checked={gender === "male"}
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
                          checked={gender === "female"}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <textarea
                        className="form-control border-0"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="submitBtn"
                        onClick={handleSubmit}
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- EditProfile End --> */}
    </>
  );
}

export default EditProfile;
