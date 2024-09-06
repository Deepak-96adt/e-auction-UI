import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { UpdateUserApi } from "../../ApiUrls";
import axios from "axios";

function EmailVerify(){

    const [triggerFetch , setTriggerFetch] = useState(false);
    const navigate = useNavigate()
    var {  email } = useParams();
    console.log(email);
    
    useEffect(() => {
        const verifyData = async () => {
          try {
            var condition_obj = { 
                condition_obj:{email: email},
                content_obj:{status:1}
             };
            const response = await axios.patch(UpdateUserApi,condition_obj);
            console.log(response);
            setTriggerFetch(true);
            // window.location.assign("http://localhost:3000");
            navigate("/");
            setTimeout(()=>{
                navigate("/login");
            },2000);
          } catch (error) {
            console.error("Error verifying data:", error);
          }
        };
    
        verifyData();
      }, [triggerFetch]);
            
    return <>
    </>
}
export default EmailVerify;