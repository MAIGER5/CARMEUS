import React, { useContext } from 'react'
import styles from './row_1Text_2Card.module.css';
import { useNavigate } from 'react-router-dom'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import DataContext from '../../dataContext/dataContext';
import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';


export const Row_1Text_2Card = () => {

  const navigate = useNavigate()
  
  const data = useContext(DataContext);

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

  const handleClickNavigate = (path)=>{
    navigate(path)
  }


  return (
    <div className={`${styles.contenedor}`}>

        <div className={styles.cardBig}>
          <div className={`card  ${styles.firstCard}`}>
            <div className="card-body">
              <h1 className="card-title">{data[0].title}</h1>
              <p className="card-text">{data[0].description}.</p>
              <div className={styles.containerBoton} 
                onClick={ ()=> handleClickNavigate(data[0].link) }
              >
                <ButtomProduct infoboton={data[0].buttomInfo}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={`${styles.cardSmall}`}
            onClick={ ()=> handleClickNavigate(data[1].link)}
          >
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImage} />
              </div>
              <div className={`${styles.textInt}`}>{data[1].description}</div>
          </div>
          <div className={`${styles.cardSmall}`}
            onClick={ ()=> handleClickNavigate(data[2].link)}
          >
              <div className={styles.cardImg}>
                <AdvancedImage cldImg={myImage2} />
              </div>
              <div className={`${styles.textInt}`}>{data[2].description}</div>
          </div>
        </div>
        
    </div>
  )
}