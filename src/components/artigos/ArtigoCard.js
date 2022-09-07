import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


function ArtigoCard(props) {
    const classes = props.classes;
    const artigo = props.artigo

    return (
        <Box sx={{ padding: '1%' }}>
            <Card variant="outlined" className={classes.artigoCard}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {artigo.titulo}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {artigo.data}
                    </Typography>

                    <Typography variant="body2">
                        {artigo.conteudo}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to={props.url} className={classes.menuLink}>
                        <Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>Leia sobre</Typography>
                    </Link>
                </CardActions>
            </Card>


        </Box>
    );
}

export default ArtigoCard;