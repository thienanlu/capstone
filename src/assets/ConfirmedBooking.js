import { Link } from "react-router-dom";


function ConfirmedBooking(props){
    return(
        <section className="confirm-booking-page">
            <section className="confirm-booking-wrapper app-section">
                <h3 className="confirm-booking-title">Your booking has been confirmed!</h3>
                <h4>Booking Details</h4>
                <section className="booking-details">
                    <p>Name: <span>{props.name}</span></p>
                    <p>Phone Number: <span>{props.number}</span></p>
                    <p>Date: <span>{props.date}</span></p>
                    <p>Time: <span>{props.time}</span></p>
                    <p>Number of Guests: <span>{props.guest}</span></p>
                    <p>Occasion Type: <span>{props.occasion}</span></p>
                </section>
                <Link to='/' className="btn">Back to Home</Link>
            </section>
        </section>
    )
}

export default ConfirmedBooking;