import MenuPrincipal from "./menu/MenuPrincipal"
import logo from "../img/sohCabecaSemFundo.png"
import logoNome from "../img/textoLogo.png"
import Box from '@mui/material/Box';

function Header(props) {
    const classes = props.classes;
    return( 
        <div className={classes.header}>
            <Box className={classes.logosHeader}>
                <img src={logo} className={classes.logo} alt="logoCabeca"/>
                <img src={logoNome} className={classes.logoNome} alt="logoTextoNome"/>
            </Box>
            <MenuPrincipal classes={classes}/>
        </div>
    )
}

export default Header;