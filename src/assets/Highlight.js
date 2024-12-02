// import components
import Button from './button.js';
import Card from './Card.js';

// import image
import SaladImage from './img/greek salad.jpg'
import BruchettaImage from './img/bruchetta.svg'
import DessertImage from './img/lemon dessert.jpg'

function Highlight(){
    return(
        <div className="highlight app-section">
            <div className="highlight-heading">
                <h2>Specials</h2>
                <Button to="/menu" text="Online Menu"/>
            </div>
            <section className='heading-category'>
                <Card title="Greek Salad" price="$12.90" img={SaladImage} imgalt="greek salad image"/>
                <Card title="Bruchetta" price="$5.90" img={BruchettaImage} imgalt="greek salad image"/>
                <Card title="Lemon Dessert" price="$4.50" img={DessertImage} imgalt="greek salad image"/>
            </section>
        </div>
    )
}

export default Highlight;