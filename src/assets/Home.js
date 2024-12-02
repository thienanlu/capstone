// import  components
import Header from './header'
import Footer from './footer'
import Billboard from './Billboard'
import Highlight from './Highlight'

import './css/home.css'

function Home(){
    return (
        <div className="home-page">
            <Header />
            <Billboard />
            <Highlight />
            <Footer />
        </div>
    )
}

export default Home;