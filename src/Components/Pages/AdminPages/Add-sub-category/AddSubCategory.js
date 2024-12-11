import { useEffect, useState } from "react";
import "./AddSubCategory.css";
import axios from "axios";
import { FetchCategoryApi, SaveSubCategoryApi } from "../../../../ApiUrls";
import Alert from "../../../Other-Components/Alert";

function AddSubCategory() {
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [catList, setCatList] = useState([]);
  const [file, setFile] = useState();
  const [output, setOutput] = useState();
  const [myAlert, setMyAlert] = useState(null);

  const showAlert = (type, message) => {
    setMyAlert({
      type: type,
      message: message,
    });
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddCat = () => {
    if (!catName) {
      setOutput("* Category Name is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    }else if (!subCatName) {
      setOutput("* Sub-Category Name is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else if (document.getElementById("myFile1").value=="") {
      setOutput("* Sub-Category image is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else {

    const formData = new FormData();

    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("subcaticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(SaveSubCategoryApi, formData, config)
      .then((response) => {
        showAlert("success",response.data.status);
        setCatName("");
        setSubCatName("");
        document.getElementById("myFile1").value = "";
        setTimeout(() => {
          setMyAlert(null);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        showAlert("danger",error.message);
        setTimeout(() => {
          setMyAlert(null);
        }, 3000);
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FetchCategoryApi);
        setCatList(response?.data?.categoryDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- AddSubCategory Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
          <Alert alert={myAlert}/>
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Add SubCategory Here</h1>
                  <h5 className="text-danger">{output}</h5>
                </div>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                        value={catName}
                        onChange={(e) => {
                          setCatName(e.target.value);
                        }}
                      >
                        <option>Select Category</option>
                        {
                          catList.map((row)=>(
                            <option>{row.catnm}</option>
                          ))
                        }
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Sub-Category Name"
                        value={subCatName}
                        onChange={(e) => {
                          setSubCatName(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="file"
                        className="form-control border-0 py-3"
                        placeholder="Add File"
                        id="myFile1"
                        // value={file}
                        onChange={handleChange}
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-6">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="addSubCatBtn"
                        onClick={() => {
                          handleAddCat();
                        }}
                      >
                        Add Sub-Category
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- AddSubCategory End --> */}
    </>
  );
}

export default AddSubCategory;
