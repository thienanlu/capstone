import bannerImg from '../assets/img/restauranfood.jpg'

import '../assets/css/banner.css'

function Bannner(props){
    return (
        <section className="banner">
            <h2 className="banner-title">{props.title}</h2>
            <img src={bannerImg} />
        </section>
    )
}

export default Bannner