import './css/rating.css'

function Rating(props){
    return (
        <div className="rating-card">
            <p>Rating</p>
            <section className="rating-info">
                <img src={props.img} alt="user-avatar"/>
                <p>{props.name}</p>
            </section>
            <p className="rating-desc">
                Review ...... 
            </p>
        </div>
    )
}

export default Rating