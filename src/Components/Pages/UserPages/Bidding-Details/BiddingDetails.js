import { useEffect, useState } from "react";
import "./BiddingDetails.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Alert from "../../../Other-Components/Alert";
import { FetchBidApi } from "../../../../ApiUrls";


function BiddingDetails() {
  const {p_id}=useParams();

  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const [bidDetails, setBidDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
    var condition_obj = { p_id: p_id };
        const response = await axios.get(FetchBidApi, {
          params: {
            condition_obj: condition_obj,
          },
        });
        setBidDetails(response?.data?.bidDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bidDetails]);



  return (
    <>
      {/* <!-- BiddingDetails Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            <div className="col-lg-12 about-text py-5 wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">View Bidding Details Here</h1>
                </div>
                
                  <div>
                    <table class="table table-bordered text-center">
                      <thead class="bg-dark text-light">
                        <tr>
                          <td>BiddingId</td>
                          <td>ProductId</td>
                          <td>userId</td>
                          <td>Bidding Price</td>
                          <td>Created_at</td>
                        </tr>
                      </thead>
                      <tbody class="tbody-light border-dark">
                        {bidDetails.map((row) => (
                          <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>{row.p_id}</td>
                            <td>{row.useremail}</td>
                            <td>{row.bidprice}</td>
                            <td>{row.created_at}</td>                            
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BiddingDetails End --> */}
    </>
  );
}

export default BiddingDetails;
