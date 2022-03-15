import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import LinkMenu from './LinkMenu';



function MenuPrincipal(props) {
    const classes = props.classes;
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
          <LinkMenu classes={classes} texto={"Início"} url={"/home"}/>
          <LinkMenu classes={classes} texto={"Sobre mim"} url={"/sobre-mim"}/>
          <LinkMenu classes={classes} texto={"Artigos"} url={"/artigos"}/>
          <LinkMenu classes={classes} texto={"Agendamento"} url={"/agendamento"}/>
        </Box>

    );
}

export default MenuPrincipal;