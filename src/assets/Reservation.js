import React, { useReducer, useState} from "react";
import Header from "./header";
import Footer from "./footer";
import BookingForm from "./BookingForm";
import BookingImage from './img/restaurant.jpg';
import './css/reservation.css';

function initializeTimes(){
    let date = new Date(99, 6, 12);
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

const updateTime = (state, action) => {
    switch (action) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    };
  };


function Reservation() {
    const [availableTimes, dispatch] = useReducer(updateTime(), initializeTimes());
    // const handleRemoveTime = (time) => {
    //     dispatch({ type: REMOVE_TIME, payload: time });
    // };

    // const handleAddTime = (time) => {
    //     dispatch({ type: ADD_TIME, payload: time });
    // };

    return (
        <div className="reservation-page">
            <Header />
            <section className="reservation-banner app-section">
                <h3>Reserve a table</h3>
                <img src={BookingImage} alt="restaurant-image" />
            </section>
            <BookingForm 
                availableTimes={availableTimes} 
                // onRemoveTime={handleRemoveTime} 
                // onAddTime={handleAddTime}
                dispatch={updateTime}
            />
            <Footer />
        </div>
    );
}



export default Reservation;