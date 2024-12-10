import React, { useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import ConfirmedBooking from "./ConfirmedBooking";
import BookingForm from "./BookingForm";
// import BookingImage from './img/restaurant.jpg';
import './css/reservation.css';

function initializeTimes(){
    let date = new Date();
    var data = fetchAPI(date)
    return data
}

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const submitAPI = function(formData) {
    return true;
  };

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };

const UPDATE_TIME = "update";

const updateTime = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
}

function Reservation() {
    const [availableTimes, dispatch] = useReducer(updateTime, [], initializeTimes);

    const navigate = useNavigate()

    const submitForm = (formData) => {
      let isSubmmited = false;
      const response = submitAPI(formData);
    }

    return (
        <div className="reservation-page">
            <Header />
            <BookingForm 
                availableTimes={availableTimes} 
                // onRemoveTime={handleRemoveTime} 
                // onAddTime={handleAddTime}
                dispatch={dispatch}
                submitForm={submitForm}
            />
            <Footer />
        </div>
    );
}



export default Reservation;