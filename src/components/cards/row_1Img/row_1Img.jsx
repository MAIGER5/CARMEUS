import React, { useContext } from 'react'
import styles from './row_1Img.module.css';
import { useNavigate } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';


export const Row_1Img = () => {

  const navigate = useNavigate();


  const data = useContext(DataContext)

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });

  const handleClickNavigate = (path)=>{
    navigate(path)
  }

  const myImageBig = cld.image(data[8].image);

  return (
    <div className={`${styles.contenedor}`}>

      <div onClick={()=> handleClickNavigate(`/${data[8].link}`)} className={styles.cardBig}>
        <AdvancedImage cldImg={myImageBig} />
        <h5>{data[8].description}</h5>
      </div>
{/* 
      <div onClick={()=> handleClickNavigate(`/${data[8].link}`)} className={`${styles.cardSmall} ${styles.responsiveHidden}`}>
        <div className={styles.cardImg}>
          <AdvancedImage cldImg={myImageBig} />
        </div>
        <div className={`${styles.textInt}`}>{data[7].description}</div>
      </div> */}
      
    </div>
  )
}


