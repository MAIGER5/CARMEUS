import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PropTypes from 'prop-types';



export default function BotonDocuments({icon, title, subtitle, description, link}) {


  return (
    <Card sx={{ maxWidth:'450px', borderRadius:'20px', background:'#248DC1'}}>
      <CardMedia
        component="img"
        sx={{ width: 'clamp(4rem, 4vw, 8rem)', margin:'20px auto 0 auto', borderRadius:100}}
        image={icon}
        alt="LogoCard"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div"  sx={{fontSize:'clamp(1.2rem, 1.1vw, 2rem)', color:'white', fontWeight:'600'}}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize:'clamp(0.8rem, 1vw, 1rem)', color:'white'}}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ color: 'white', fontSize:'clamp(0.7rem, 0.6vw, 0.7rem)' }}
          >
            {description}
          </Typography>
        </CardContent>

      </Box>
    </Card>
  );
}

BotonDocuments.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}