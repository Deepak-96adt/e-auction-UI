import { useEffect, useState } from "react";
import "./BidProduct.css";
import axios from "axios";
import Alert from "../../../Other-Components/Alert";
import { FetchBidApi, FetchProductApi, SaveBidApi } from "../../../../ApiUrls";
import { useParams } from "react-router-dom";

function BidProduct() {
  const [myAlert, setMyAlert] = useState(null);
  const [product, setProduct] = useState([]);
  const [currentPrice, setCurrentPrice] = useState();
  const [currentPrice2, setCurrentPrice2] = useState();
  const { _id } = useParams();

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  useEffect(() => {
    
    const fetchData = async () => {
      var condition_obj = { _id: _id };
      try {
        const response = await axios.get(FetchProductApi, {
          params: {
            condition_obj: condition_obj,
          },
        });

        setProduct(response.data.productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchBidData = async () => {
      try {
        var condition_obj2 = { p_id: _id };
        const response = await axios.get(FetchBidApi,{
          params: {
            condition_obj: condition_obj2,
          },
        });
        const length = response.data.bidDetails.length
        setCurrentPrice2(response.data.bidDetails[length-1].bidprice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBidData();

  }, [_id]);

  const handleBidProduct = () => {
    setCurrentPrice("");
    setCurrentPrice2(currentPrice);
  
    product.map((row) => {
      const bidDetail = {
        p_id: row._id,
        user_email: localStorage.getItem("email"),
        bidprice: currentPrice,
      };
      axios
        .post(SaveBidApi, bidDetail)
        .then((response) => {
          console.log(response);
          showAlert("success", response.data.status);
          setTimeout(() => {
            setMyAlert(null);
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          showAlert("danger", error.message);
          setTimeout(() => {
            setMyAlert(null);
          }, 3000);
        });
    });
  };

  return (
    <>
            {/* <!-- BidProduct Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            {product.map((row) => (
              <>
                <div
                  className="col-lg-6 ps-lg-0"
                  style={{ "min-height": "400px" }}
                >
                  <div className="position-relative h-100">
                    <img
                      className="position-absolute img-fluid w-100 h-100"
                      src={`../img/upload/product-img/${row.piconnm}`}
                      style={{ "object-fit": "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn">
                  <div className="p-lg-5 pe-lg-0">
                    <div className="section-title text-start">
                      <h1 className="display-5 mb-4">Bid Product Here</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                      <form className="w-75">
                        <div className="row g-3">
                          <div className="col-12 text-center">
                            <h4>Product Id : {row._id}</h4>
                          </div>
                          <div className="col-12 text-center">
                            <h4>Title : {row.title}</h4>
                          </div>
                          <div className="col-12 text-center">
                            <h4>Base Price : {row.baseprice}</h4>
                          </div>
                          
                          {currentPrice2 && (
                            <div className="col-12 text-center">
                              <h4>Auction Current Price : {currentPrice2}</h4>
                            </div>
                          )}
                          <div className="col-12">
                            <input
                              type="text"
                              className="form-control border-0"
                              placeholder="Enter Your Bid Price"
                              value={currentPrice}
                              onChange={(e) => {
                                setCurrentPrice(e.target.value);
                              }}
                              style={{ height: "55px" }}
                            />
                          </div>

                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100 py-3"
                              type="button"
                              id="addSubCatBtn"
                              onClick={() => {
                                handleBidProduct();
                              }}
                            >
                              Bid Product
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      
      {/* <!-- BidProduct End --> */}
    </>
  );
}

export default BidProduct;
