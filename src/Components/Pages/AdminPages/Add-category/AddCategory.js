import { useState } from "react";
import "./AddCategory.css";
import axios from "axios";
import { SaveCategoryApi } from "../../../../ApiUrls";
import Alert from "../../../Other-Components/Alert";

function AddCategory() {
  const [catName, setCatName] = useState();
  const [file, setFile] = useState();
  const [output, setOutput] = useState();
  const [myAlert , setMyAlert] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const showAlert=(type,message)=>{
    setMyAlert({
      type:type,
      message:message
    })
  }  

  const handleAddCat = () => {

    if (!catName) {
      setOutput("* Category Name is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else if (document.getElementById("myFile").value=="") {
      setOutput("* Category image is required");
      setTimeout(()=>{
        setOutput("");
      },3000);
    } else {

    const formData = new FormData();

    formData.append("catnm", catName);
    formData.append("caticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(SaveCategoryApi, formData, config)
      .then((response) => {
        showAlert("success",response.data.status);
        setCatName("");
        document.getElementById("myFile").value="";
        setTimeout(()=>{
          setMyAlert(null);
        },3000)
      })
      .catch((error) => {
        console.log(error);
        showAlert("danger",error.message);
        setTimeout(()=>{
          setMyAlert(null);
        },3000)
      });
    }
  };

  return (
    <>
      {/* <!-- AddCategory Start --> */}
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <Alert alert={myAlert}/>
            <div className="col-lg-12 about-text wow fadeIn">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Add Category Here</h1>
                  <h5 className="text-danger">{output}</h5>
                </div>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Category Name"
                        value={catName}
                        onChange={(e) => {
                          setCatName(e.target.value);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="file"
                        className="form-control border-0 py-3"
                        placeholder="Add File"
                        id="myFile"
                        // value={file}
                        onChange={handleChange}
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        id="addCatBtn"
                        onClick={() => {
                          handleAddCat();
                        }}
                      >
                        Add Category
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- AddCategory End --> */}
    </>
  );
}

export default AddCategory;
