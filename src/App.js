import "./App.css";
import { Routes , Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/VisiterPages/Home/Home";
import Login from "./Components/Pages/VisiterPages/Login/Login";
import Register from "./Components/Pages/VisiterPages/Register/Register";
import About from "./Components/Pages/VisiterPages/About/About";
import Service from "./Components/Pages/VisiterPages/Service/Service";
import Contact from "./Components/Pages/VisiterPages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AdminHome from "./Components/Pages/AdminPages/AdminHome/AdminHome";
import UserHome from "./Components/Pages/UserPages/UserHome/UserHome";
import PageNotFound from "./Components/Other-Components/PageNotFound";
import TeamMembers from "./Components/Pages/VisiterPages/TeamMembers/TeamMembers";
import Features from "./Components/Pages/VisiterPages/Features/Features";
import ManageUser from "./Components/Pages/AdminPages/ManageUser/ManageUser";
import ChangePassword from "./Components/Other-Components/ChangePassword/ChangePassword";
import EditProfile from "./Components/Other-Components/EditProfile/EditProfile";
import Logout from "./Components/Other-Components/Logout";
import AddCategory from "./Components/Pages/AdminPages/Add-category/AddCategory";
import AddSubCategory from "./Components/Pages/AdminPages/Add-sub-category/AddSubCategory";
import Categories from "./Components/Pages/UserPages/Categories/Categories";
import SubCategories from "./Components/Pages/UserPages/SubCategories/SubCategories";
import EmailVerify from "./Components/Other-Components/EmailVerify";
import AddProduct from "./Components/Pages/UserPages/Add-product/AddProduct";
import ProductList from "./Components/Pages/UserPages/Product-List/ProductList";
import BidProductList from "./Components/Pages/UserPages/Bid-ProductList/BidProductList";
import BidProduct from "./Components/Pages/UserPages/Bid-Product/BidProduct";
import BiddingDetails from "./Components/Pages/UserPages/Bidding-Details/BiddingDetails";


function App() {
  return (
    <>
      <Header />

      <Navbar />

      <Routes>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<AdminHome />}></Route>
        <Route path="/user" element={<UserHome />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/team" element={<TeamMembers />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/manageuser" element={<ManageUser />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/subcategories/:catnm" element={<SubCategories />}></Route>
        <Route path="/verify/:email" element={<EmailVerify />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/productlist/:subcatnm" element={<ProductList />}></Route>
        <Route path="/bidproductlist" element={<BidProductList />}></Route>
        <Route path="/bidproduct/:_id" element={<BidProduct />}></Route>
        <Route path="/biddingdetails/:p_id" element={<BiddingDetails />}></Route>
      </Routes>

      <Footer />

      {/* <!-- Back to Top --> */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
      >
        <i className="fa fa-arrow-up "></i>
      </a>
    </>
  );
}

export default App;
