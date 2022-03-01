import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




function MenuPrincipal() {
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
          <Typography sx={{ minWidth: 100 }}>Início</Typography>
          <Typography sx={{ minWidth: 100 }}>Sobre mim</Typography>
          <Typography sx={{ minWidth: 100 }}>Artigos</Typography>
          <Typography sx={{ minWidth: 100 }}>Agendamento</Typography>
        </Box>

    );
}

export default MenuPrincipal;