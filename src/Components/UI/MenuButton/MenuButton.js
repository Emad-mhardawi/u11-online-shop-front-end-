import './MenuButton.css';

const MenuButton = (props) => {
    return (


       <div onClick ={props.clicked} className={ `menu-button ${props.className}` }>
            <div className= {'menu-button__line'}></div>
        </div>


    )

}

export default MenuButton;

