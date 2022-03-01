import MenuPrincipal from "./menu/MenuPrincipal"
import logo from "../img/sohCabecaSemFundo.png"

function Header(props) {
    const classes = props.classes;
    return( 
        <div className={classes.header}>
            <img src={logo} className={classes.logo}alt="fireSpot"/>
            <MenuPrincipal />
        </div>
    )
}

export default Header;