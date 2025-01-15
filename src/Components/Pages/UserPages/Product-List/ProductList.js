import { useState, useEffect } from "react";
import "./ProductList.css";
import Cards from "../Cards/Cards";
import { FetchProductApi } from "../../../../ApiUrls";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductList() {
  const {subcatnm}=useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    
    var condition_obj = { subcatnm: subcatnm };

    const fetchData = async () => {
      try {
        const response = await axios.get(FetchProductApi,{
          params: {
            condition_obj: condition_obj,
          },
        });
        setProductList(response?.data?.productList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [subcatnm]);
  

  return (
    <>
      {/* <!-- ProductList Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">View {subcatnm} list here</h1>
                </div>
                <div className="d-flex row justify-content-center">
                  {productList.map((row) => (
                    <Cards iconnm={row.piconnm} name={row.title} folder="product-img" description={row.description} baseprice={row.baseprice} path="#" _id={row._id} created_at={row.created_at}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ProductList End --> */}
    </>
  );
}

export default ProductList;
