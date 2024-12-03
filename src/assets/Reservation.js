import Header from "./header";
import Footer from "./footer";
import BookingForm from "./BookingForm";
import BookingImage from './img/restaurant.jpg'

import './css/reservation.css'

function Reservation(){
    return(
        <div className="reservation-page">
            <Header />
            <section className="reservation-banner  app-section">
                <h3>Reserve a table</h3>
                <img src={BookingImage} alt="restaurant-image"/>
            </section>
            <BookingForm />
            <Footer />
        </div>
    )
}

export default Reservation;