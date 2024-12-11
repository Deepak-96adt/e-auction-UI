import { useEffect, useState } from "react";
import {
  DeleteUserApi,
  FetchUserApi,
  UpdateUserApi,
} from "../../../../ApiUrls";
import "./ManageUser.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../../Other-Components/Alert";

function ManageUser() {
  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const [userDetails, setUserDetails] = useState([]);
  const [tableContent, setTableContent] = useState(false);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const navigate = useNavigate();

  const manageUserStatus = (id, task) => {
    if (task === "block") {
      let condition_obj = {
        condition_obj: { _id: id },
        content_obj: { status: 0 },
      };
      axios
        .patch(UpdateUserApi, condition_obj)
        .then(() => {
          setTriggerFetch(!triggerFetch);
          navigate("/manageuser");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (task === "verify") {
      let condition_obj = {
        condition_obj: { _id: id },
        content_obj: { status: 1 },
      };

      axios
        .patch(UpdateUserApi, condition_obj)
        .then(() => {
          setTriggerFetch(!triggerFetch);
          navigate("/manageuser");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      let condition_obj = {
        data: { _id: id },
      };

      axios
        .delete(DeleteUserApi, condition_obj)
        .then(() => {
          setTriggerFetch(!triggerFetch);
          navigate("/manageuser");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        var condition_obj = { role: "user" };
        const response = await axios.get(FetchUserApi, {
          params: {
            condition_obj: condition_obj,
          },
        });
        setUserDetails(response?.data?.userDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [triggerFetch]);

  const alertShow = () => {
    if (userDetails.length > 0) {
      showAlert(
        "success",
        "There is " + userDetails.length + " user-details avilable"
      );
      setTimeout(() => {
        setMyAlert(null);
      }, 3000);
    } else {
      showAlert("danger", "There is No user-details avilable !!!");
      setTimeout(() => {
        setMyAlert(null);
      }, 3000);
    }
  };

  return (
    <>
      {/* <!-- ManageUser Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            <div className="col-lg-12 about-text py-5 wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">View & Manage User</h1>
                </div>
                {tableContent ? (
                  <div>
                    <table class="table table-bordered">
                      <thead class="bg-dark text-light">
                        <tr>
                          <td>Id</td>
                          <td>Name</td>
                          <td>Email</td>
                          <td>Mobile</td>
                          <td>Address</td>
                          <td>City</td>
                          <td>Gender</td>
                          <td>Info</td>
                          <td>Status</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody class="tbody-light border-dark">
                        {userDetails.map((row) => (
                          <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                            <td>{row.address}</td>
                            <td>{row.city}</td>
                            <td>{row.gender}</td>
                            <td>{row.info}</td>
                            <td>
                              {row.status === 1 && (
                                <span className="text-success">Verified</span>
                              )}
                              {row.status === 0 && (
                                <span className="text-warning">Blocked</span>
                              )}
                            </td>
                            <td>
                              {row.status === 1 && (
                                <Link
                                  onClick={() => {
                                    manageUserStatus(row._id, "block");
                                  }}
                                  className="text-primary"
                                >
                                  Change Status
                                </Link>
                              )}
                              {row.status === 0 && (
                                <Link
                                  onClick={() => {
                                    manageUserStatus(row._id, "verify");
                                  }}
                                  className="text-primary"
                                >
                                  Change Status
                                </Link>
                              )}
                              <br />
                              {
                                <Link
                                  onClick={() => {
                                    manageUserStatus(row._id, "delete");
                                  }}
                                  className="text-danger"
                                >
                                  Delete
                                </Link>
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div></div>
                )}
                {tableContent ? (
                  <button
                    onClick={() => {
                      setTableContent(false);
                    }}
                    className="btn btn-primary py-3 px-5"
                  >
                    Hide User Details &nbsp;
                    <span className="fas fa-angle-double-up"></span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setTableContent(true);
                      alertShow();
                    }}
                    className="btn btn-primary py-3 px-5"
                  >
                    Show User Details &nbsp;
                    <span className="fas fa-angle-double-down"></span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ManageUser End --> */}
    </>
  );
}

export default ManageUser;
