import React, { useContext } from 'react'
import styles from './row_1Text_2Card.module.css';
import DataContext from '../../dataContext/dataContext';
import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';


export const Row_1Text_2Card = () => {
  
  const data = useContext(DataContext)


  return (
    <div className={`container ${styles.contenedor}`}>

        <div className={styles.cardBig}>
          <div className={`card  ${styles.firstCard}`}>
            <div className="card-body">
              <h1 className="card-title text-primary">{data[0].title}</h1>
              <p className="card-text">{data[0].description}.</p>
              <ButtomProduct infoboton={data[0].buttomInfo}/>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <img src={data[1].image}  alt="" />
              </div>
              <div className={`${styles.textInt}`}>{data[1].description}</div>
          </div>
          <div className={`${styles.cardSmall}`}>
              <div className={styles.cardImg}>
                <img src={data[2].image} alt="" />
              </div>
              <div className={`${styles.textInt}`}>{data[2].description}</div>
          </div>
        </div>
        
    </div>
  )
}