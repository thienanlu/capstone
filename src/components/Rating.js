import '../assets/css/rating.css'

function Rating(props){
    return (
        <div className="rating-card">
            <p>Rating:  5<i class="fa-solid fa-star"></i></p>
            <section className="rating-info">
                <img src={props.img} alt="user-avatar"/>
                <p>{props.name}</p>
            </section>
            <p className="rating-desc">
                "{props.review}"
            </p>
        </div>
    )
}

export default Rating