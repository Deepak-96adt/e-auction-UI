import { useEffect, useState } from "react";
import "./ChangePassword.css";
import axios from "axios";
import { FetchUserApi, UpdateUserApi } from "../../../ApiUrls";
import Alert from "../Alert";
import { Link } from "react-router-dom";

function ChangePassword() {

  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const [oldPassPlaceholder, setOldPassPlaceholder] = useState("Old Password");
  const [oldPassdisabledBtn, setOldPassDisabledBtn] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [password, setPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [output, setOutput] = useState();
  const [output1, setOutput1] = useState();

  useEffect(() => {
    var condition_obj = { _id: localStorage.getItem("_id") };
    axios
      .get(FetchUserApi, {
        params: {
          condition_obj: condition_obj,
        },
      })
      .then((response) => {
        setPassword(response.data.userDetails[0].password);
      })
      .catch((error) => {
        alert(error.response.data.response);
      });
  });

  const handlePassword = () => {
    if (password === oldPassword) {
      setOutput("");
      setOutput1("Correct Password , Press Tab to Continue");
      setDisabledBtn(false);
    } else {
      setOutput1("");
      setOutput("Incorrect Password !");
      setDisabledBtn(true);
    }
  };

  const handleNewPassword = () => {
    setOldPassword("");
    setOutput("");
    setOutput1("");
    setOldPassPlaceholder("You Successfully Entered Old-Password");
    setOldPassDisabledBtn(true);
  };

  const handleConfirmPassword = () => {
    if (
      newPassword === undefined ||
      confirmPassword === undefined ||
      newPassword === "" ||
      confirmPassword === ""
    ) {
      setOutput("");
      setOutput1("");
      setOutput("Input Field Can't be Empty");
    } else if (newPassword === confirmPassword) {
      setOutput("");
      setOutput1("Password Matched Successfully");
      setTimeout(() => {
        setOutput1("");
      }, 3000);
    } else {
      setOutput("");
      setOutput1("");
      setOutput("New and Confirm Password should be same !");
    }
  };

  const navigateNewCP=()=>{
    setOldPassword("");
    setOldPassPlaceholder("Old Password");
    setNewPassword("");
    setConfirmPassword("");
    setDisabledBtn(true)
    setOldPassDisabledBtn(false);
  }

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      let condition_obj = {
        condition_obj: { _id: localStorage.getItem("_id") },
        content_obj: { password: confirmPassword },
      };
      axios
        .patch(UpdateUserApi, condition_obj)
        .then((result) => {
          showAlert(
            "success",
            localStorage.getItem("name") + " Changed Password Successfully..."
          );
          setTimeout(() => {
            setMyAlert(null);
          }, 3000);
          navigateNewCP();
        })
        .catch((error) => {
          showAlert("danger", "Oops samething went wrong !!!");
          setTimeout(() => {
            setMyAlert(null);
          }, 3000);
          console.error(error);
        });
    }
  };

  const enterNext = (event) => {
    if (event.key === "Enter") {
      document.getElementById("submitBtn").click();
    }
  };

  return (
    <>
      {/* <!-- ChangePassword Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            <div className="col-lg-12 quote-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Change Password Here !</h1>
                  <h5 className="text-success">{output1}</h5>
                  <h5 className="text-danger">{output}</h5>
                </div>

                <form>
                  <div className="row g-3">
                    <div className="col-6 col-sm-6 ">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder={oldPassPlaceholder}
                        disabled={oldPassdisabledBtn}
                        value={oldPassword}
                        onChange={(e) => {
                          setOldPassword(e.target.value);
                        }}
                        onKeyUp={() => {
                          handlePassword();
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-6 col-sm-6 ">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="New Password"
                        disabled={disabledBtn}
                        value={newPassword}
                        onFocus={() => {
                          handleNewPassword();
                        }}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-6 col-sm-6 ">
                      <input
                        type="password"
                        className="form-control border-0"
                        placeholder="Confirm Password"
                        disabled={disabledBtn}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                        onKeyUp={(e) => {
                          handleConfirmPassword();
                          enterNext(e);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="submitBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        disabled={!password || !newPassword || !confirmPassword || (newPassword!=confirmPassword)}
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ChangePassword End --> */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Confirmation
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Do you really want to Change your password ?</div>
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
                    handleChangePassword();
                  }}
                >
                  Yes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
