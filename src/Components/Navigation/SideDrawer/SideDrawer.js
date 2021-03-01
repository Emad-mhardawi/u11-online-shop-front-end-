import NavigationLink from '../NavLink/NavigationLink';
import './SideDrawer.css';

const SideDrawer = (props)=>{

    let classes ='side-drawer';
    if(props.show){
        classes = 'side-drawer open'
    }else{
        classes ='side-drawer';
    }

    return(
        <div className= {`${classes}  ${props.className}`} >
            <div className='side-drawer__head'>
                <div className='logo'>Emad</div>
            </div>
            <div className='side-drawer-body'>
            <div className='side-drawer-body__auth'>
            <NavigationLink clicked={props.linkClicked} to='/signin' className='signin-link'>Sign in</NavigationLink>
            <NavigationLink clicked={props.clicked} to='/signup' className='signup-link signup-link-side'>Sign up</NavigationLink>
            </div>
            <NavigationLink className='side' clicked={props.linkClicked} to='/'>Home</NavigationLink>
            <NavigationLink className='side' clicked={props.linkClicked} to='/shop'>Shop</NavigationLink>
            <NavigationLink className='side' clicked={props.linkClicked} to='/about'>About</NavigationLink>
            <NavigationLink className='side' clicked={props.linkClicked} to='/contact'>Contact</NavigationLink>
            </div>
        </div>
    )

}

export default SideDrawer;

