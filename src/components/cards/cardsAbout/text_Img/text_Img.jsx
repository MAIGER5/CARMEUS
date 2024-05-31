import React, { useContext } from 'react';
import styles from './text_Img.module.css';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../../dataContext/dataContext';
import { BotonLearnMore } from '../../../buttoms/learnMore/botonLearnMore';


export const Text_Img = () => {

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

  return (
    <div className={`${styles.contenedor}`}>
      <div className={styles.cardBig}>
        <div className={`card  ${styles.firstCard}`}>
          <div className="card-body">
            <h1 className="card-title">{data[1].title}</h1>
            <p className="card-text">{data[0].description}.</p>
            <BotonLearnMore infoboton={data[0].buttomInfo}/>
          </div>
        </div>
      </div>
      <div className={styles.cardImg}>
        <AdvancedImage cldImg={myImage} />
      </div>
        
    </div>
  )
}