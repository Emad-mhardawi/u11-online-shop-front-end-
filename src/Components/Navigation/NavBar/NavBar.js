import React from 'react';
import BackDrop from '../../UI/BackDrop/BackDrop';
import MenuButton from '../../UI/MenuButton/MenuButton';
import NavLinks from '../NavLinks/NavLinks';

import './NavBar.css';


const NavBar = (props) => {

    return (

        <nav className='nav-bar'>
            <h1> emad</h1>
            <NavLinks />
            <MenuButton className={props.show ?"open":''} clicked={props.menuButtonClicked} />
            {props.show? <BackDrop/> : null}
        </nav>


    )

}

export default NavBar;

