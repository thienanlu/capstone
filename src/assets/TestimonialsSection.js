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
                <Rating name="Paul" img={avatarImage} review="Delicious food, great ambiance, friendly service, highly recommend!"/>
                <Rating name="Jessica" img={avatarImage} review="Amazing flavors, cozy atmosphere, exceptional service, will return."/>
                <Rating name="Lucas" img={avatarImage} review="Excellent food, wonderful staff, perfect spot for a night out."/>
                <Rating name="Rebecca" img={avatarImage} review="Fantastic experience, great food, wonderful service, highly recommend!"/>
            </div>
        </div>
    )
}

export default Testimonials;