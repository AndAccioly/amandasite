import imagemPerfil from "../../img/amandaTeste.jpg"
import Box from '@mui/material/Box';

function PreviewSobreMim(props){
  
    const classes = props.classes
    return (
        <div className = {classes.fundoPreviewSobreMim}>
            <Box sx={{alignItems: 'center', textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
                <img src={imagemPerfil} className={classes.imagemPerfil} alt="imagemPerfil"/>
                <div className = {classes.textoPreviewSobreMim}>Sobre mim</div>
            </Box>
        </div>
    );
}

export default PreviewSobreMim;