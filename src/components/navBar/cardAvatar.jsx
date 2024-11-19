import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { closeLoginClientAction } from '../../Redux/Actions/closeLoginClientAction';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardAvatar({storage}) {

  const dispatch = useDispatch()

  const handleCloseSesion = ()=>{
    dispatch(closeLoginClientAction());
    window.location.reload();
  }

  return (
    <Box sx={{ minWidth: 230}}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Actualmente en
            </Typography>
            <Typography variant="h5" component="div">
              {storage.company}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {storage.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleCloseSesion}>Cerrar Sesión</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}