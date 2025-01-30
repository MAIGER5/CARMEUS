import * as React from 'react';
import styles from '../dashBoardClient.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function BotonTransaccion({icon, title, subtitle, description, link}) {


  return (
    <Card sx={{ display: 'flex', maxWidth:'450px', borderRadius:'20px' }}>
      <CardMedia
        component="img"
        sx={{ width: 'clamp(4rem, 4vw, 8rem)', margin:'auto 10px', borderRadius:100, }}
        image={icon}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={link} className={styles.typografy}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography  component="div"  sx={{fontSize:'clamp(1.2rem, 1vw, 2rem)', fontWeight:'600', }}>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary', fontSize:'clamp(0.8rem, 1vw, 1rem)' }}
            >
              {subtitle}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 18, width: 38 }} />
            </IconButton>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary', fontSize:'clamp(0.8rem, 1vw, 1rem)' }}
            >
              {description}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Card>
  );
}

BotonTransaccion.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}