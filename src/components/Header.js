import MenuPrincipal from "./menu/MenuPrincipal"
import MenuRecolhido from "./menu/MenuRecolhido"
import logo from "../img/sohCabecaSemFundo.png"
import logoNome from "../img/textoLogo.png"
import Box from '@mui/material/Box'
import Media from 'react-media'

function Header(props) {
    const classes = props.classes;
    return( 
        <div>
            <div className={classes.header}>
                <Box className={classes.logosHeader}>
                    <img src={logo} className={classes.logo} alt="logoCabeca"/>
                    <img src={logoNome} className={classes.logoNome} alt="logoTextoNome"/>
                </Box>
                <Media queries={{ small: { maxWidth: 599 } }}>
                    {matches =>
                        matches.small ? (
                        <MenuRecolhido classes={classes}/>
                        ) : (
                        <MenuPrincipal classes={classes}/>
                        )
                    }
                    </Media>
                
            </div>
        </div>
    )
}

export default Header;