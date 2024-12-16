import {Link} from  'react-router-dom';
import './css/button.css'

function Button(props){
    return(
        <Link aria-label="On Click" to={props.to}className="btn">{props.text}</Link>
    )
}

export default Button;