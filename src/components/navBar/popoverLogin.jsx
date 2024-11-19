import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Avatar, Stack } from '@mui/material';
import CardAvatar from './cardAvatar';

export default function PopoverLogin({storage}) {

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
      <Avatar aria-describedby={id} variant="contained" onClick={handleClick} data-bs-toggle="tooltip" data-bs-placement="left" title={storage}>{storage.company[0]}</Avatar>
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
        <CardAvatar storage={storage}/>
      </Popover>
    </Stack>
  );
}