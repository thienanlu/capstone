// import images
import chefImage1 from  './img/Mario and Adrian A.jpg'
import chefImage2 from  './img/Mario and Adrian b.jpg'


function AboutSection(){
    return(
        <section className="about-section app-section">
            <div className="about-section-info">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused
                    on traditional recipes served with a modern twist.
                </p>
            </div>
            <div className="about-section-imgs">
                <img src={chefImage1} alt="Mario and Adrian" />
            </div>
        </section>
    )
}

export default AboutSection;