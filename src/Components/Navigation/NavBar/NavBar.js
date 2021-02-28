import React from 'react';
import MenuButton from '../../UI/MenuButton/MenuButton';
import NavLinks from '../NavLinks/NavLinks';
import './NavBar.css';


const NavBar = (props) => {

    return (

        <nav className='nav-bar'>
            <h1> emad</h1>
            <MenuButton className={props.show ?"open":''} clicked={props.menuButtonClicked} />
            <NavLinks />

        </nav>


    )

}

export default NavBar;

