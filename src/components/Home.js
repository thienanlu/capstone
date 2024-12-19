// import  components
import Header from './header'
import Footer from './footer'
import Billboard from './Billboard'
import Highlight from './Highlight'
import Testimonials from './TestimonialsSection'
import AboutSection from './AboutSection'

import '../assets/css/home.css'

function Home(){
    return (
        <div className="home-page">
            <Header />
            <Billboard />
            <Highlight />
            <Testimonials />
            <AboutSection/>
            <Footer />
        </div>
    )
}

export default Home;