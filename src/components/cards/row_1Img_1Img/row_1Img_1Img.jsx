import React, { useContext } from 'react'
import styles from './row_1Img_1Img.module.css';
import { useLocation } from 'react-router-dom'
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

  const myImageCero = cld.image(data[0].image);
  const myImageUno = cld.image(data[1].image);
  const myImageBig = cld.image(data[2].image);
  // console.log(data);

  return (
    <div className={`${styles.contenedor}`}>

        <div className={styles.group}>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageCero} />
              </div>
              <div className={`${styles.textInt}`}>{data[0].description}</div>
          </div>
        </div>

        <div className={styles.cardBig}>
          <AdvancedImage cldImg={myImageBig} />
          <h5>{data[2].description}</h5>
        </div>
        
    </div>
  )
}


