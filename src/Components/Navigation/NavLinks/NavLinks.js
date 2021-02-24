
import './NavLinks.css';
import NavigationLink from '../NavLink/NavigationLink';

const NavLinks = (props)=>{

  
    return(
        <ul className={`nav-links ${props.className}`}>
            <NavigationLink to='/'>Home</NavigationLink>
            <NavigationLink to='/shop'>Shop</NavigationLink>
            <NavigationLink to='/about'>About</NavigationLink>
            <NavigationLink to='/contact'>Contact</NavigationLink>
            <NavigationLink to='/sugnin' className='signin-link'>Sign in</NavigationLink>
            <NavigationLink to='/signup' className='signup-link'>Sign up</NavigationLink>
            
            
        </ul>
    )

}

export default NavLinks;

