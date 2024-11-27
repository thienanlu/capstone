// import files
import Button from "./components/button";
import './assets/css/billboard.css'

import billboardImage from './assets/img/restaurant.jpg'
function Billboard(){
    return(
        <section id="billboard" className="app-section">
            <div className="billboard-info">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused
                    on traditional recipes served with a modern twist.
                </p>
                <Button text="Reserve a table"/>
            </div>
            <img src={billboardImage} alt="Our Restaurant" className="billboard-img"/>
       </section>
    )
}

export default Billboard;

