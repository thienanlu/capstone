import  {useState} from 'react'
import ConfirmedBooking from './ConfirmedBooking'



function BookingForm(props){
    const [name, setName] = useState("")
    const [number, setNumber] = useState({
        value: "",
        isTouched: false
    })
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guest, setGuest] = useState("")
    const [occasion, setOccasion] = useState("")
    const [isSubmmited, setIsSubmmited] = useState(false)

    // number error notification
    const ErrorMessage = () => {
        return(
            <span className='field-error'>Phone number must has at least 8 digits</span>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidated){
            props.submitForm({name, number, date, time, guest, occasion})
            setIsSubmmited(true)
            alert("Your booking has been confirmed");
            console.log('table booking for', name, number, date, time, guest, occasion);
        }
      };

      const isValidated = () => {
        return (
          name && date && time && guest &&
          number.value.length >= 8
        );
      };

    const handleOnDateChange = (e) => {
        setDate(e.target.value)
        console.log(props.availableTimes)
        props.dispatch(e.target.value)
    }


    return( (isSubmmited) ? <ConfirmedBooking name={name} number={number.value} date={date} time={time} guest={guest} occasion={occasion} /> : (
        <div className="form-wrapper app-section">
            <h3 className='form-title'>RESERVE A TABLE</h3>
            <form className='booking-form' onSubmit={handleSubmit}>
                <div className='form-input-wrapper'>
                    <label for="name">Full Name:  <span>*</span>   </label>
                    <input id="for" required onChange={(e => setName(e.target.value))} type="text" value={name} name="name" placeholder="Enter your name" />
                </div>
                <div className='form-input-wrapper'>
                    <label for="number">Phone number:  <span>*</span> </label> 
                    {number.isTouched && number.value.length < 8 ? (
                        <ErrorMessage message="Phone number must has at least 8 digits" /> ) : null}
                    <input id="number" required onChange={(e) => {setNumber({ ...number, value: e.target.value });}} 
                                    onBlur={() => {setNumber({ ...number, isTouched: true }); }}  type="tel" value={number.value} name="phone" placeholder="Enter your phone number" 
                    />
                </div>
                <div className='form-input-wrapper'>
                    <label for="date">Reservation Date:  <span>*</span></label>
                    <input id="date" required onChange={handleOnDateChange} value={date} type="date" name="date" className='date-input'/>
                </div>
                <div className='form-input-wrapper'>
                    <label>Reservation Time:  <span>*</span></label>
                    <select required onChange={(e => setTime(e.target.value))} value={time} name="time">
                        <option value=''>Choose times</option>
                        {props.availableTimes.map(time => <option value={time}>{time}</option>)}
                    </select>
                </div>
                <div className='form-input-wrapper'>
                    <label>Number of Guests:  <span>*</span></label>
                    <input required onChange={(e => setGuest(e.target.value))} value={guest} type='number' name="guest-number" min="1" max="30"></input>
                </div>
                <div className='form-input-wrapper'>
                    <label>Occasion</label>
                    <select value={occasion} onChange={(e => setOccasion(e.target.value))}>
                        <option value="">Occasion</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                        <option value="party">Party</option>
                    </select>
                </div>
                <button type='submit' disabled={!isValidated()} className='submit-btn btn'>Submit</button>
            </form>
        </div>
    )
    )
}

export default BookingForm;

