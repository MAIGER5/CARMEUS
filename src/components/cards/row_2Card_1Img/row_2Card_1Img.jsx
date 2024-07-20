import React, { useContext } from 'react'
import styles from './row_2Card_1Img.module.css';
import { Link, useLocation } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';


export const Row_2Card_1Img = () => {

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
          <Link to={`/${data[0].link}`} className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageCero} />
              </div>
              <div className={`${styles.textInt}`}>{data[0].description}</div>
          </Link>
          <Link to={`/${data[1].link}`} className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageUno} />
              </div>
              <div className={`${styles.textInt}`}>{data[1].description}</div>
          </Link>
          {/* solo se muestra cuando es responsive la web */}
          <Link to={`/${data[2].link}`} className={`${styles.cardSmall} ${styles.responsiveHidden}` }>
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImageBig} />
              </div>
              <div className={`${styles.textInt}`}>{data[2].description}</div>
          </Link>

          
        </div>

        <Link to={`/${data[2].link}`} className={styles.cardBig}>
          <AdvancedImage cldImg={myImageBig} />
          <h5>{data[2].description}</h5>
        </Link>
        
    </div>
  )
}


