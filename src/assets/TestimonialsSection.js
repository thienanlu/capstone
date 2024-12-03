import Rating from "./Rating";

// import image
import avatarImage from './img/user-avatar.jpg'

function Testimonials(){
    return (
        <div className="testimonials app-section">
            <h2 className="testimonials-title">
                Testimonials
            </h2>
            <div className="testimonials-category">
                <Rating name="Paul" img={avatarImage}/>
                <Rating name="Jessica" img={avatarImage}/>
                <Rating name="Lucas" img={avatarImage}/>
                <Rating name="Rebecca" img={avatarImage}/>
            </div>
        </div>
    )
}

export default Testimonials;