import React, { useContext } from 'react'
import styles from './row_2Card_1Text.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';
import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';


export const Row_2Card_1Text = () => {
  
  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });
  
  const myImage = cld.image(data[1].image); 
  const myImage2 = cld.image(data[2].image); 

  return (
    <div className={`${styles.contenedor}`}>

        <div className={styles.group}>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
              <AdvancedImage cldImg={myImage} />
              </div>
              <div className={`${styles.textInt}`}>{data[1].description}</div>
          </div>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
              <AdvancedImage cldImg={myImage2} />
              </div>
              <div className={`${styles.textInt}`}>{data[2].description}</div>
          </div>
        </div>
        
        <div className={styles.cardBig}>
          <div className={`card  ${styles.firstCard}`}>
            <div className="card-body">
              <h1 className={`card-title ${styles.colorFuente}`}>{data[0].title}</h1>
              <p className="card-text">{data[0].description}.</p>
              <ButtomProduct infoboton={data[0].buttomInfo}/>
            </div>
          </div>
        </div>
    </div>
  )
}