import Box from '@mui/material/Box';
import calendarioImg from "../../img/calendario.jpg"

function PreviewAgendamento(props) {

    const classes = props.classes
    return (
        <div className={classes.fundoPreviewAgendamento}>
            <Box sx={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
                <img src={calendarioImg} className={classes.imagemCalendario} alt="calendario" />
                <div className = {classes.textoPreviewSobreMim}>Agendamento</div>
            </Box>
        </div>
    );
}

export default PreviewAgendamento;