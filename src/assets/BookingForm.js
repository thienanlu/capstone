import  {useState} from 'react'

function BookingForm(props){
    return(
        <div className="form-wrapper app-section">
            <h3 className='form-title'>Booking form</h3>
            <form className='booking-form'>
                <div className='form-input-wrapper'>
                    <label>Full Name:</label>
                    <input required type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Phone number:</label>
                    <input required type="tel" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Reservation Date:</label>
                    <input required type="date" name="date" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Reservation Time:</label>
                    <input required type='time' name="time" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Number of Guests:</label>
                    <input required type='range' name="guest-number" min="1" max="30"></input>
                </div>
                <input type='submit' value="submit" className='submit-btn'></input>
            </form>
        </div>
    )
}

export default BookingForm;