import MenuButton from '../../UI/MenuButton/MenuButton';
import './NavBar.css';

const NavBar = ()=>{

    const clicked = ()=>{
        console.log('button was clicked')
    }
    return(
        <nav className='nav-bar'>
            <MenuButton className='aaaa' clicked={clicked}/>
        </nav>
    )

}

export default NavBar;

