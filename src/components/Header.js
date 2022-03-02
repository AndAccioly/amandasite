import MenuPrincipal from "./menu/MenuPrincipal"
import logo from "../img/sohCabecaSemFundo.png"
import logoNome from "../img/textoLogo.png"

function Header(props) {
    const classes = props.classes;
    return( 
        <div className={classes.header}>
            <div className={classes.logosHeader}>
                <img src={logo} className={classes.logo} alt="logoCabeca"/>
                <img src={logoNome} className={classes.logoNome} alt="logoTextoNome"/>
            </div>
            <MenuPrincipal classes={classes}/>
        </div>
    )
}

export default Header;