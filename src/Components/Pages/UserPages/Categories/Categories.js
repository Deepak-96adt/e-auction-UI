import { useState, useEffect } from "react";
import "./Categories.css";
import Cards from "../Cards/Cards";
import { FetchCategoryApi } from "../../../../ApiUrls";
import axios from "axios";

function Categories() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FetchCategoryApi);
        setCatList(response.data.categoryDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- Categories Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">View Categories Here</h1>
                </div>
                <div className="d-flex row justify-content-center">
                  {catList.map((row) => (
                    <Cards iconnm={row.caticonnm} name={row.catnm} folder="category-icon" path={`/subcategories/${row.catnm}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Categories End --> */}
    </>
  );
}

export default Categories;
