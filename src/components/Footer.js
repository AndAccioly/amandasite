import logoNomeBranco from "../img/logo-nome-branco.png"
import instaBranco from "../img/insta-branco.png"
import emailBranco from "../img/email-branco.png"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer(props) {
    const classes = props.classes;
    return(
        <div className = {classes.footer}>
            <div className = {classes.imgFooter}>
                <Box sx={{ alignItems: 'center', textAlign: 'left'}}>
                    <img src={logoNomeBranco} className={classes.logoNome} alt="logo-nome-branco"/>
                    <Box className = {classes.iconsInfo}>
                        <img src={instaBranco} className={classes.instaIcon} alt="instagram"/>
                        <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white', paddingLeft: '2%'}}>@draamandabritto</Typography>
                    </Box>
                    <Box className = {classes.iconsInfo}>
                        <img src={emailBranco} className={classes.instaIcon} alt="instagram"/>
                        <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white', paddingLeft: '2%'}}>draamandabritto@outlook.com</Typography>
                    </Box>
                </Box>
            </div>
            <Box sx={{ alignItems: 'center', textAlign: 'left', padding: '1%'}}>
                <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white' }}>Início</Typography>
                <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white' }}>Sobre mim</Typography>
                <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white' }}>Artigos</Typography>
                <Typography sx={{ minWidth: 100, fontWeight: 'bold', color: 'white' }}>Agendamento</Typography>
            </Box>        
        </div>
    )
}
//TODAS AS OPCOES DO MENU ABERTAS, CONTATO, ENDEREÇO DA CLINICA, SERVIÇOS, ARTIGOS
export default Footer;