import * as React from 'react';
import Box from '@mui/material/Box';
import LinkMenu from './LinkMenu';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BotaoLogin = styled(Button)(({ theme }) => ({
	color: 'black',
	marginLeft: '3%',
	borderColor: '#baac50',
	fontWeight: '600',
	borderRadius: '25px 25px',
	minWidth: '100px',
	minHeight: '40px',
	'&:hover': {
		backgroundColor: '#f5e689',
		borderColor: '#baac50',
	},
}));

function MenuPrincipal(props) {
	const classes = props.classes;
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
			<LinkMenu classes={classes} texto={"Início"} url={"/home"} />
			<LinkMenu classes={classes} texto={"Sobre mim"} url={"/sobre-mim"} />
			<LinkMenu classes={classes} texto={"Artigos"} url={"/artigos"} />
			<LinkMenu classes={classes} texto={"Agendamento"} url={"/agendamento"} />
			<BotaoLogin variant='outlined'>Login</BotaoLogin>
		</Box>

	);
}

export default MenuPrincipal;