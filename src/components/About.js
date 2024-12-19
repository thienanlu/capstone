// import files
import Header from "./header";
import Footer from "./footer";
import Bannner from "./Banner";

function About(){
    return(
        <div className="about-page">
            <Header />
            <Bannner title="About Us" />
            <Footer />
        </div>
    )
}

export default About;