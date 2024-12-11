import axios from "axios";
import CountdownTimer from "../../../Other-Components/CountdownTimer";
import "./Cards.css";
import { Link } from "react-router-dom";
import { FetchBidApi, SavePaymentApi } from "../../../../ApiUrls";
import { useState } from "react";
function Cards(props) {

  const [bidDetails,setBidDetails]=useState();
  
  let dateObject = new Date(props.info);
  let date = dateObject.getDate();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();
  let dayOfWeek = dateObject.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayName = days[dayOfWeek];
  let months = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let monthName = months[month];
  let hours = dateObject.getHours();
  let minutes = dateObject.getMinutes();
  let seconds = dateObject.getSeconds();
  let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

const Now = new Date();
const endTime = new Date(
  dateObject.getTime() + 48 * 60 * 60 * 1000
);
const difference = endTime - Now;

if (props.path=="#") {
  var condition_obj = { p_id: props._id };
  axios.get(FetchBidApi,{ params: {
    condition_obj: condition_obj,
  },}).then((result)=>{
    let length = result?.data?.bidDetails?.length-1;
    setBidDetails(result?.data?.bidDetails[length]);
  }).catch((error)=>{
    console.error(error);
  })
}

const handlePayment = async () => {
  const paymentDetails={
    user_email:bidDetails.user_email,
    title:props.name,
    description:props.description,
    bidprice:bidDetails.bidprice
  }
  try {
    const response = await axios.post(SavePaymentApi,paymentDetails);

      // Payment gateway URL (replace with your actual payment gateway URL)
      let paymentUrl = response?.data?.url;
  
      // Open a mini window
      let width = 600;
      let height = 600;
      let left = (window.screen.width / 2) - (width / 2);
      let top = (window.screen.height / 2) - (height / 2);
  
      var myWindow = window.open(paymentUrl, "Payment Gateway", `width=${width},height=${height},top=${top},left=${left}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


  return (
    <>
      {props.path === "#" ? (
          <div to={props.path} className="card p-1 m-3 rounded-3" id="cardId">
            <img
              className="card-img-top"
              style={{ height: "12rem" }}
              src={`../img/upload/${props.folder}/${props.iconnm}`}
              alt="Category image"
            />
            <div className="card-body">
              <h4 className="card-title text-center pb-2 text-uppercase text-primary"  id="catnmId">
                {props.name}
              </h4>

            <div className="card-text text-center pb-3">
              <strong>Description</strong> : <span className="text-primary">{props.description}</span>
            </div>
            <div className="card-text text-center pb-3">
              <strong>Baseprice </strong> : <span className="text-primary">{props.baseprice}</span>
            </div>
            <div className="card-text text-center pb-3">
              <strong>Product added</strong>:<span className="text-primary">{date+"-"+monthName+"-"+year+" , "+dayName+" , "+ timeString}</span>
            </div>
            <div className="card-text text-center pb-3">
              <CountdownTimer createdAt={props.info}/>
            </div>
            {difference > 0 ? <Link className="btn btn-primary w-100 rounded-3" to={`/bidproduct/${props._id}`}>
              Bid Runing
            </Link> :
            <button className="btn btn-primary w-100 rounded-3" onClick={()=>{handlePayment()}}>
            Buy Now
          </button>}
            </div>
          </div>
      ) : (
        <Link to={props.path} className="card p-2 m-3 rounded-3" id="cardId">
          <img
            className="card-img-top"
            style={{ height: "12rem" }}
            src={`../img/upload/${props.folder}/${props.iconnm}`}
            alt="Category image"
          />
          <div className="card-body">
            <h4 className="card-title text-center" id="catnmId">
              {props.name}
            </h4>
          </div>
        </Link>
      )}
    </>
  );
}

export default Cards;
