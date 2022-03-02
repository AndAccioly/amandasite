import logoNomeBranco from "../img/logo-nome-branco.png"
import instaBranco from "../img/insta-branco.png"

function Footer(props) {
    const classes = props.classes;
    return(
        <div className = {classes.footer}>
       Contato, endereço, etc
       <img src={logoNomeBranco} className={classes.logoNome} alt="logo-nome-branco"/>
       <img src={instaBranco} className={classes.instaIcon} alt="instagram"/>
        </div>
    )
}
//TODAS AS OPCOES DO MENU ABERTAS, CONTATO, ENDEREÇO DA CLINICA, SERVIÇOS, ARTIGOS
export default Footer;