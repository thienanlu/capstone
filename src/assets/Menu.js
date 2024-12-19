import Header from "./header"
import Footer from "./footer"
import Bannner from "./Banner"


function Menu(){
    return(
        <div className="menu-page">
            <Header />
            <Bannner   title="Our Menu" />
            <Footer />
        </div>
    )
}

export default Menu