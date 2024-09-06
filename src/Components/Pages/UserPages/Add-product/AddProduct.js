import { useEffect, useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import {
  FetchCategoryApi,
  FetchSubCategoryApi,
  SaveProductApi,
} from "../../../../ApiUrls";
import Alert from "../../../Other-Components/Alert";

function AddProduct() {
  const [title, setTitle] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [description, setDescription] = useState();
  const [basePrice, setBasePrice] = useState();
  const [file, setFile] = useState();
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [output, setOutput] = useState();
  const [output1, setOutput1] = useState();
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

    useEffect(()=>{
      
      const fetchData = async () => {
        try {
          var condition_obj = { catnm: catName };
          const response = await axios.get(FetchSubCategoryApi, {
            params: {
              condition_obj: condition_obj,
            },
          });
          console.log(response.data.categoryDetails);
          setSubCatList(response.data.categoryDetails);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      if (catName) {
        fetchData();
      }
    },[catName]);

  const handleAddProduct = () => {
    if (!title) {
      setOutput("* Title is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    }else if (!catName) {
      setOutput("* Category Name is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    }else if (!subCatName) {
      setOutput("* Sub-Category Name is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    }else if (!description) {
      setOutput("* Description is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    }else if (!basePrice) {
      setOutput("* Base-Price is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else if (document.getElementById("myFile2").value=="") {
      setOutput("* Product image is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("catnm", catName);
    formData.append("subcatnm", subCatName);
    formData.append("description", description);
    formData.append("baseprice", basePrice);
    formData.append("picon", file);
    formData.append("useremail", localStorage.getItem("email"));

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(SaveProductApi, formData, config)
      .then((response) => {
        console.log(response);
        showAlert("success",response.data.status);
        setTitle("");
        setCatName("");
        setSubCatName("");
        setDescription("");
        setBasePrice("");
        document.getElementById("myFile2").value = "";
        setTimeout(() => {
          setMyAlert(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        showAlert("danger",error.message);
        setTimeout(() => {
          setOutput("");
        }, 3000);
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(FetchCategoryApi);
        console.log(response.data.categoryDetails);
        setCatList(response.data.categoryDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <!-- AddProduct Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert} />
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Add Product Here</h1>
                  <h5 className="text-danger">{output}</h5>
                  <h5 className="text-success">{output1}</h5>
                </div>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
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
                        {catList.map((row) => (
                          <option>{row.catnm}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                        value={subCatName}
                        onChange={(e) => {
                          setSubCatName(e.target.value);
                        }}
                      >
                        <option>Select Sub-Category</option>
                        {
                          subCatList.map((row)=>(
                            <option>{row.subcatnm}</option>
                          ))
                        }
                      </select>
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Base-Price"
                        value={basePrice}
                        onChange={(e) => {
                          setBasePrice(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="file"
                        className="form-control border-0 py-3"
                        placeholder="Add File"
                        id="myFile2"
                        onChange={handleChange}
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="addSubCatBtn"
                        onClick={() => {
                          handleAddProduct();
                        }}
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- AddProduct End --> */}
    </>
  );
}

export default AddProduct;
