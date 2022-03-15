import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function LinkMenu(props) {
    const classes = props.classes;
    return( 
        <Link to={props.url} className={classes.menuLink}><Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>{props.texto}</Typography></Link>           
    )
}

export default LinkMenu;