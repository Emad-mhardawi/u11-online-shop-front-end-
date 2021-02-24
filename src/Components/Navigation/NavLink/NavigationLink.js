
import './NavigationLink.css';
import {NavLink} from'react-router-dom';

const NavigationLink = (props)=>{

  
    return(
        <li className='nav-list-item'>
            <NavLink to={props.to} className={`nav-link  ${props.className}` }>
                {props.children}
            </NavLink>
        </li>
    )

}

export default NavigationLink;

