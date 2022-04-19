import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <div>
    <CardContent>
      <Typography variant="h5" component="div">
        Artigo template
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        18/04/2022 18:36
      </Typography>

      <Typography variant="body2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">Leia mais</Button>
    </CardActions>
  </div>
);

function ArtigoCard(props) {
  const classes = props.classes;
  //test
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className = {classes.artigoCard}>
        <CardContent>
          <Typography variant="h5" component="div">
            Artigo template
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            18/04/2022 18:36
          </Typography>

          <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Leia mais</Button>
        </CardActions>
      </Card>
      <Link to={props.url} className={classes.menuLink}>
        <Typography sx={{ minWidth: 100, fontWeight: 'bold' }}>TESTE</Typography>
      </Link>

    </Box>
  );
}

export default ArtigoCard;