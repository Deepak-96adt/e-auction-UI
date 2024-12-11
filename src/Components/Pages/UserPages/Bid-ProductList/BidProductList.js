import { useEffect, useState } from "react";
import "./BidProductList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Alert from "../../../Other-Components/Alert";
import { FetchProductApi } from "../../../../ApiUrls";


function BidProductList() {
  // const {subcatnm}=useParams();

  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const [productDetails, setProductDetails] = useState([]);
  // const [tableContent, setTableContent] = useState(false);
  const [triggerFetch, setTriggerFetch] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
    var condition_obj = { useremail: localStorage.getItem("email") };

        const response = await axios.get(FetchProductApi, {
          params: {
            condition_obj: condition_obj,
          },
        });
        setProductDetails(response?.data?.productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productDetails]);



  return (
    <>
      {/* <!-- BidProductList Start --> */}
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
                          <td>ProductId</td>
                          <td>Title</td>
                          <td>SubCategory</td>
                          <td>Description</td>
                          <td>Baseprice</td>
                          <td>ProductImg</td>
                          <td>Info</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody class="tbody-light border-dark">
                        {productDetails.map((row) => (
                          <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>{row.title}</td>
                            <td>{row.subcatnm}</td>
                            <td>{row.description}</td>
                            <td>{row.baseprice}</td>
                            <td className="w-25" ><img className="w-50 h-50" src={`../img/upload/product-img/${row.piconnm}`} alt="" /></td>
                            <td>{row.info}</td>
                            <td>{
                              <Link className="btn text-primary" to={`/biddingdetails/${row._id}`}>Show bid</Link>
                              }</td>                            
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
      {/* <!-- BidProductList End --> */}
    </>
  );
}

export default BidProductList;
