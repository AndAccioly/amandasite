import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



function MenuPrincipal(props) {
    const classes = props.classes;
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
          <Link to="/home" className={classes.menuLink}><Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>Início</Typography></Link>
          <Link to="/home" className={classes.menuLink}><Typography sx={{ minWidth: 100, fontWeight: 'bold'}}>Sobre mim</Typography></Link>
          <Link to="/home" className={classes.menuLink}><Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>Artigos</Typography></Link>
          <Link to="/home" className={classes.menuLink}><Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>Agendamento</Typography></Link>
        </Box>

    );
}

export default MenuPrincipal;