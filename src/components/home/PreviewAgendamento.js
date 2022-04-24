import Box from '@mui/material/Box';

function PreviewAgendamento(props){
  
    const classes = props.classes
    return (
        <div className = {classes.fundoPreviewAgendamento}> 
            <Box sx={{alignItems: 'center', textAlign: 'center', justifyContent: 'center', display: 'flex'}}>
                Agendamento
            </Box>
        </div>
    );
}

export default PreviewAgendamento;