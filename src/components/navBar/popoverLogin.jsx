import * as React from 'react';
import styles from './popoverLogin.module.css'
import Popover from '@mui/material/Popover';
import { Avatar, Stack, Typography } from '@mui/material';
import CardAvatar from './cardAvatar';
import { useSelector } from 'react-redux';
import { decodeJWT } from '../hooks/decodeJWT';

export default function PopoverLogin({infoAvatar}) {

  const stateLogignClientToken = useSelector(state => state.login.tokenClient)
  const stateLogignEmployeeToken = useSelector(state => state.loginEmployee.tokenEmployee)
  const decodeToken = decodeJWT(stateLogignClientToken || stateLogignEmployeeToken)


  // const nameAvatar = storage.company || storage.name || ""; es lo mismo que el siguiente solo que primero confirmo storage, pero no lo necesito porque si estoy en este componente es porque hay un estado anterior en otro componente que me lo confirma
  const nameAvatar = decodeToken.company || decodeToken.name || '';
  const firstLeterAvatar = nameAvatar.charAt(0).toUpperCase() ;



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ backgroundColor: '#f95959', fontSize:'15px', fontWeight: 'bold' }}
        alt="Remy Sharp"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title={nameAvatar}
        translate = 'no'
      >
        {firstLeterAvatar}
      </Avatar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <CardAvatar infoAditionalAvatar={infoAvatar} />
      </Popover>
    </Stack>
  );
  
}