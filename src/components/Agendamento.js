import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { send } from 'emailjs-com';

const BotaoAgendamento = styled(Button)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#f5e689',
    '&:hover': {
        backgroundColor: '#baac50',
    },
}));

function Agendamento(props) {
    const OLA = "Olá, meu nome é "
    const MOTIVOS = " e entro em contato pelo(s) seguinte(s) motivo(s): "
    const ENTRE_EM_CONTATO = ". Entre em contato comigo por "
    const OU = " ou "

    const DESTINATARIO = "andreacciolyl@gmail.com"
    const SERVICE_ID = "service_8x8pds6"
    const TEMPLATE_ID = "template_ft5kjie"
    const USER_ID = "wTUsBZq2cYLxssH9l"

    const [enderecoEmail, setEnderecoEmail] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [consulta, setConsulta] = useState("");
    const [mensagem, setMensagem] = useState("")
    const classes = props.classes;
    const isContato = { inputProps: { 'aria-label': 'Checkbox contato' } };

    const enviarEmail = () => {
        const emailEnviar = {
            de: enderecoEmail,
            para: DESTINATARIO,
            nome: nome,
            mensagem: mensagem,
            replyTo: ''
        }

        send(
            SERVICE_ID,
            TEMPLATE_ID,
            emailEnviar,
            USER_ID
        ).then(
            (result) => {
                console.log(result.text);
                alert("Email enviado com sucesso!");
            },
            (error) => {
                console.log(error.text);
                alert("Erro ao enviar email. Tente novamente.", error);
            }
        )
    }

    const onChangeEnderecoEmail = (e) => {
        setEnderecoEmail(e.target.value);
        setMensagem(OLA + nome + MOTIVOS + consulta + ENTRE_EM_CONTATO + telefone + OU + e.target.value)
    }
    const onChangeNome = (e) => {
        setNome(e.target.value);
        setMensagem(OLA + e.target.value + MOTIVOS + consulta + ENTRE_EM_CONTATO + telefone + OU + enderecoEmail)
    }
    const onChangeTelefone = (e) => {
        setTelefone(e.target.value);
        setMensagem(OLA + nome + MOTIVOS + consulta + ENTRE_EM_CONTATO + e.target.value + OU + enderecoEmail)
    }
    const onChangeConsulta = (e) => {
        setConsulta(e.target.value);
        setMensagem(OLA + nome + MOTIVOS + e.target.value + ENTRE_EM_CONTATO + telefone + OU + enderecoEmail)
    }

    return (
        <div>
            <div className={classes.agendamentoForm}>
                <Box component="form" sx={{ '& > :not(style)': { m: 1 }, alignItems: 'center', justifyContent: 'center', margin: '1%' }} noValidate autoComplete="off">
                    <p>Gostaria de agendar uma consulta?</p>
                    <Box sx={{ display: 'flex' }}>
                        <div className={classes.agendamentoFormItem} >
                            <TextField id="agendamentoNome" label="Nome" variant="outlined" value={nome} onChange={onChangeNome} /></div>
                        <div className={classes.agendamentoFormItem} >
                            <TextField id="agendamentoTelefone" label="Telefone" variant="outlined" value={telefone} onChange={onChangeTelefone} /></div>
                        <div className={classes.agendamentoFormItem} >
                            <TextField id="agendamentoEmail" label="Email" variant="outlined" value={enderecoEmail} onChange={onChangeEnderecoEmail} /> </div>
                    </Box>
                    <Box sx={{ display: 'block' }}>
                        <div className={classes.agendamentoFormText} ><TextField id="filled-multiline-static" label="Consulta" variant="outlined"
                            multiline rows={4} fullWidth value={consulta} onChange={onChangeConsulta} /></div>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Checkbox {...isContato} defaultChecked sx={{
                            color: '#baac50', '&.Mui-checked': {
                                color: '#baac50'
                            }
                        }} />
                        <p>Autorizo que entrem em contato comigo através de Whatsapp, email ou telefone</p>
                    </Box>
                    <BotaoAgendamento onClick={enviarEmail}>Solicitar agendamento</BotaoAgendamento>
                </Box>
            </div>
            <Box>
                <p>Você pode agendar uma consulta também pelo telefone xxxx-xxxx ou email yyy@yyyy.com</p>
            </Box>
        </div>
    );
}

export default Agendamento;