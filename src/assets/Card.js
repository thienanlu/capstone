import './css/card.css'

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
            <p className='card-btn'>Order Delivery</p>
        </div>
    )
}

export default Card