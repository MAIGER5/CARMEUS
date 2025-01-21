import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { closeLoginClientAction } from '../../Redux/Actions/closeLoginClientAction';
import { closeLoginEmployeeAction } from '../../Redux/Actions/closeLoginEmployeeAction';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const  CardAvatar = ({token}) => {

  const { company = '', name = '', mail = '' } = token || {};

  const userName = company || name || 'no disponible'


  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleCloseSession = ()=>{
    dispatch(closeLoginClientAction());
    dispatch(closeLoginEmployeeAction());
    navigate('/sigIn')
    // window.location.reload();
  }

  return (
    <Box sx={{ minWidth: 230}}>
      <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Actualmente en
            </Typography>
            <Typography variant="h5" component="div">
              {userName || ''}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {mail || ''}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleCloseSession}>Cerrar Sesión</Button>
          </CardActions>
      </Card>
    </Box>
  );
}

CardAvatar.propTypes = {
  token: PropTypes.shape({
    company: PropTypes.string,
    name: PropTypes.string,
    mail: PropTypes.string,
  }).isRequired,
};

export default CardAvatar;