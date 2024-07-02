import React, { useContext } from 'react'
import styles from './row_1Img_1Img.module.css';
import { Link, useLocation } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';


export const Row_1Img_1Img = () => {

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

  const myImageCero = cld.image(data[6].image);
  const myImageBig = cld.image(data[7].image);
  // console.log(data);

  return (
    <div className={`${styles.contenedor}`}>

        <div className={styles.group}>
          <Link to={`/${data[6].link}`} className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageCero} />
              </div>
              <div className={`${styles.textInt}`}>{data[6].description}</div>
          </Link>
        </div>

        <Link to={`/${data[7].link}`} className={styles.cardBig}>
          <AdvancedImage cldImg={myImageBig} />
          <h5>{data[7].description}</h5>
        </Link>
        
    </div>
  )
}


