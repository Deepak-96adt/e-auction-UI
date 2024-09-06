import { Navigate } from "react-router-dom";

function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("mobile");
    localStorage.removeItem("role");
    localStorage.removeItem("gender");
    localStorage.removeItem("info");
    localStorage.removeItem("address");
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
    localStorage.removeItem("city");
    localStorage.removeItem("name");
    return <>
        <Navigate to="/login" />
    </>
}

export default Logout;
