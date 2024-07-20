import React, { useContext } from 'react'
import styles from './row_1Img_2Card.module.css';
import { Link, useLocation } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';


export const Row_1Img_2Card = () => {

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

  const myImageCero = cld.image(data[4].image);
  const myImageUno = cld.image(data[5].image);
  const myImageBig = cld.image(data[3].image);
  // console.log(data);

  return (
    <div className={`${styles.contenedor}`}>

        <Link to={`/${data[3].link}`} className={styles.cardBig}>
          <AdvancedImage cldImg={myImageBig} />
          <h5>{data[3].description}</h5>
        </Link>
        <div className={styles.group}>

          {/* solo se muestra cuando es responsive la web */}
          <Link to={`/${data[3].link}`} className={`${styles.cardSmall} ${styles.responsiveHidden}` }>
            <div className={styles.cardImg}>
              <AdvancedImage cldImg={myImageBig} />
            </div>
            <div className={`${styles.textInt}`}>{data[3].description}</div>
          </Link>

          <Link to={`/${data[4].link}`} className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageCero} />
              </div>
              <div className={`${styles.textInt}`}>{data[4].description}</div>
          </Link>
          <Link to={`/${data[5].link}`} className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageUno} />
              </div>
              <div className={`${styles.textInt}`}>{data[5].description}</div>
          </Link>
        </div>

        
    </div>
  )
}


