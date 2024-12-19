import Header from "./header"
import Footer from "./footer"
import Bannner from "./Banner"

function Login(){
    return(
        <div className="login-page">
            <Header />
            <Bannner title="Login" />
            <Footer />
        </div>
    )
}

export  default Login