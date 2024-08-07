import React, { useContext } from 'react';
import styles from './img_Text.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../../dataContext/dataContext';
import { BotonLearnMore } from '../../../buttoms/learnMore/botonLearnMore';


export const Img_Text = () => {

  const data = useContext(DataContext)

  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });
  
  const myImage = cld.image(data[0].image); 

  return (
    <div className={`${styles.contenedor}`}>
      <div className={styles.cardImg}>
        <AdvancedImage cldImg={myImage} />
      </div>
      <div className={styles.cardBig}>
        <div className={`card  ${styles.firstCard}`}>
          <div className="card-body">
            <h1 className="card-title">{data[0].title}</h1>
            <p className="card-text">{data[0].description}.</p>
            {/* <BotonLearnMore infoboton={data[0].buttomInfo}/> */}
          </div>
        </div>
      </div>
        
    </div>
  )
}