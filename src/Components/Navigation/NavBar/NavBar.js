import MenuButton from '../../UI/MenuButton/MenuButton';
import NavLinks from '../NavLinks/NavLinks';
import './NavBar.css';

const NavBar = ()=>{

    const clicked = ()=>{
        console.log('button was clicked')
    }
    return(
        <nav className='nav-bar'>
            <h1> emad</h1>
            <MenuButton className='aaaa' clicked={clicked}/>
            <NavLinks/>
            
        </nav>
    )

}

export default NavBar;

