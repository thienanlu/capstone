import  {useState, useReducer} from 'react'
import button from './button'
import ConfirmedBooking from './ConfirmedBooking'
import BookingImage from './img/restaurant.jpg';



function BookingForm(props){
    let today = new Date()
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [guest, setGuest] = useState()
    const [occasion, setOccasion] = useState()
    const [isSubmmited, setIsSubmmited] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({name, number, date, time, guest, occasion})
        setIsSubmmited(true)
        // clearForm()
        alert("Your booking has been confirmed");
        console.log('table booking for', name, number, date, time, guest, occasion);
      };


    const clearForm = () => {
        setName('')
        setNumber('')
        setDate('')
        setTime('')
        setGuest('')
        setOccasion('')
    }

    const handleOnDateChange = (e) => {
        setDate(e.target.value)
        console.log(props.availableTimes)
        props.dispatch(e.target.value)
    }


    return( (isSubmmited) ? <ConfirmedBooking name={name} number={number} date={date} time={time} guest={guest} occasion={occasion} /> : (
        <div className="form-wrapper app-section">
            <h3 className='form-title'>RESERVE A TABLE</h3>
            <form className='booking-form' onSubmit={handleSubmit}>
                <div className='form-input-wrapper'>
                    <label>Full Name:</label>
                    <input required onChange={(e => setName(e.target.value))} type="text" value={name} name="name" placeholder="Enter your name" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Phone number:</label>
                    <input onChange={(e => setNumber(e.target.value))} type="tel" value={number} name="phone" placeholder="Enter your phone number" />
                </div>
                <div className='form-input-wrapper'>
                    <label>Reservation Date:</label>
                    <input onChange={handleOnDateChange} value={date} type="date" name="date" className='date-input'/>
                </div>
                <div className='form-input-wrapper'>
                    <label>Reservation Time:</label>
                    {/* <input onChange={(e => setTime(e.target.value))} value={time} type='time' name="time" /> */}
                    <select onChange={(e => setTime(e.target.value))} value={time} name="time">
                        <option value='default'>Choose times</option>
                        {props.availableTimes.map(time => <option value={time}>{time}</option>)}
                    </select>
                </div>
                <div className='form-input-wrapper'>
                    <label>Number of Guests:</label>
                    <input onChange={(e => setGuest(e.target.value))} value={guest} type='number' name="guest-number" min="1" max="30"></input>
                </div>
                <div className='form-input-wrapper'>
                    <label>Occasion</label>
                    <select value={occasion} onChange={(e => setOccasion(e.target.value))}>
                        <option value="default">Occasion</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                        <option value="party">Party</option>
                    </select>
                </div>
                <input type='submit' value="Submit" className='submit-btn'></input>
            </form>
        </div>
    )
    )
}

export default BookingForm;

