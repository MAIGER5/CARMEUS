import React, { useContext } from 'react';
import styles from './cardFloat.module.css';
import imagen from '../../utils/logos/carmeusBlue.jpg'
import DataContext from '../../dataContext/dataContext'
import { ButtomOther } from '../../buttoms/buttomOther/buttomOther';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';

export const CardFloat = () => {

  const data = useContext(DataContext);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const myImage = cld.image(data[0].image); 

  return (  
    <div className={styles.contenedor}>
      <div className={styles.images}>
        <AdvancedImage cldImg={myImage}/>
      </div>
      <div className={styles.bodyText}>
        <h1>{data[0].title}</h1>
        <h6>{data[0].description}</h6>
      </div>
      <div className={styles.Buttomes}>
        <ButtomOther infoboton={data[0].infoButtom}/>
      </div>
    </div>
  )
}