import '../assets/css/card.css'
import { Link } from 'react-router-dom'

function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt={props.imgalt}/>
            <div className="card-heading">
                <h2>{props.title}</h2>
                <h2>{props.price}</h2>
            </div>
            <p className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur eius.  
            </p>
            <Link to='/order'className='card-link'>Order Delivery <i class="fa-solid fa-truck"></i> </Link>
        </div>
    )
}

export default Card