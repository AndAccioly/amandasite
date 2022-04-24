import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BotaoAgendamento = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#f5e689',
    '&:hover': {
      backgroundColor: '#baac50',
    },
  }));

function Agendamento(props){
    const classes = props.classes;
    const isContato = { inputProps: { 'aria-label': 'Checkbox contato' } };

    return (
        <div>
            <div className = {classes.agendamentoForm}> 
                <Box component="form" sx={{ '& > :not(style)': { m: 1}, alignItems: 'center', justifyContent: 'center', margin: '1%'}} noValidate  autoComplete="off">
                    <p>Gostaria de agendar uma consulta?</p>
                    <Box sx={{display: 'flex'} }>
                        <div  className={classes.agendamentoFormItem} ><TextField id="agendamentoNome" label="Nome" variant="outlined"/></div>
                        <div  className={classes.agendamentoFormItem} ><TextField id="agendamentoTelefone" label="Telefone" variant="outlined" /></div>
                        <div  className={classes.agendamentoFormItem} ><TextField id="agendamentoEmail" label="Email" variant="outlined" /></div>
                    </Box>
                    <Box sx={{display: 'block'}}>
                        <div  className={classes.agendamentoFormText} ><TextField id="filled-multiline-static" label="Multiline" variant="outlined"
                            multiline rows={4} defaultValue="Informações sobre consulta" fullWidth /></div>
                    </Box>
                    <Box sx={{display: 'flex'} }>
                        <Checkbox {...isContato} defaultChecked sx={{
                            color: '#baac50', '&.Mui-checked': {
                            color: '#baac50'}
                        }}/>
                        <p>Autorizo que entrem em contato comigo através de Whatsapp, email ou telefone</p>
                    </Box>
                    <BotaoAgendamento className = {classes.botaoAgendamento} variant="contained">Solicitar agendamento</BotaoAgendamento>
                </Box>    
            </div>
            <Box>
                <p>Você pode agendar uma consulta também pelo telefone xxxx-xxxx ou email yyy@yyyy.com</p>
            </Box>
        </div>
    );
}

export default Agendamento;