import React, { useContext } from 'react'
import styles from './row_1Img.module.css';
import { Link, useLocation } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';


export const Row_1Img = () => {

  const location = useLocation();

  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImageBig = cld.image(data[8].image);
  // console.log(data);

  return (
    <Link to={`/${data[8].link}`} className={`${styles.contenedor}`}>

        <div className={styles.cardBig}>
          <AdvancedImage cldImg={myImageBig} />
          <h5>{data[8].description}</h5>
        </div>
        
    </Link>
  )
}


