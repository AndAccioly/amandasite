import imagemPerfil from "../img/amandaTeste.jpg"
import Box from '@mui/material/Box';

function SobreMim(props){
    const classes = props.classes
    return (
        <div className={classes.fundoSobreMim}>
            <div> SOBREMIM </div>
            
                <img src={imagemPerfil} className={classes.imagemPerfil} alt="imagemPerfil"/>
            
        </div>
    );
}

export default SobreMim;