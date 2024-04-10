import React, { useContext } from 'react'
import styles from './row_2Card_1Img.module.css';
import DataContext from '../../dataContext/dataContext';


export const Row_2Card_1Img = () => {

  const data = useContext(DataContext)

  console.log(data);

  return (
    <div className={`container ${styles.contenedor}`}>

        <div className={styles.group}>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <img src={data[0].image}  alt="" />
              </div>
              <div className={`${styles.textInt}`}>{data[0].description}</div>
          </div>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <img src={data[1].image} alt="" />
              </div>
              <div className={`${styles.textInt}`}>{data[1].description}</div>
          </div>
        </div>

        <div className={styles.cardBig}>
          <h5>{data[2].description}</h5>
        </div>
        
    </div>
  )
}


