import { useState, useEffect } from "react";
import "./SubCategories.css";
import Cards from "../Cards/Cards";
import { FetchSubCategoryApi } from "../../../../ApiUrls";
import axios from "axios";
import { useParams } from "react-router-dom";

function SubCategories() {
  const {catnm} = useParams();
  const [subCatList, setSubCatList] = useState([]);

  useEffect(() => {
    
    var condition_obj = { catnm: catnm };

    const fetchData = async () => {
      try {
        const response = await axios.get(FetchSubCategoryApi,{
          params: {
            condition_obj: condition_obj,
          },
        });
        setSubCatList(response?.data?.categoryDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- SubCategories Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">View {catnm} list here</h1>
                </div>
                <div className="d-flex row justify-content-center">
                  {subCatList.map((row) => (
                    <Cards iconnm={row.subcaticonnm} name={row.subcatnm} folder="subcategory-icon" path={`/productList/${row.subcatnm}`}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SubCategories End --> */}
    </>
  );
}

export default SubCategories;
