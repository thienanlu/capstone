import Header from "./header"
import Footer from "./footer"
import Bannner from "./Banner";

function Order(){
    return(
        <div className="order-page">
            <Header />
            <Bannner  title="Order Online" />
            <Footer />
        </div>
    )
}

export default Order;