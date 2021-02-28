import NavLinks from '../NavLinks/NavLinks';
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
         <NavLinks className='side-drawer-navlinks '/>
        </div>
    )

}

export default SideDrawer;

