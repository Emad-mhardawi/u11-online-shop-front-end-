
import './NavLinks.css';
import NavigationLink from '../NavLink/NavigationLink';

const NavLinks = (props)=>{

  
    return(
        <ul className={`nav-links ${props.className}`}>
            <NavigationLink clicked={props.clicked} to='/'>Home</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/shop'>Shop</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/about'>About</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/contact'>Contact</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/signin' className='signin-link'>Sign in</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/signup' className='signup-link signup-link-side'>Sign up</NavigationLink>
        </ul>
    )

}

export default NavLinks;

