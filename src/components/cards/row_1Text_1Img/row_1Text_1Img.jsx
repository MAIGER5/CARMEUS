import React, { useContext } from 'react';
import styles from './row_1Text_1Img.module.css';
import DataContext from '../../dataContext/dataContext';
import { ButtomProduct } from '../../buttoms/buttomProducts/buttomProduct';


export const Row_1Text_1Img = () => {

  const data = useContext(DataContext)


  return (
    <div className={`container ${styles.contenedor}`}>

      <div className={styles.cardBig}>
        <div className={`card  ${styles.firstCard}`}>
          <div className="card-body">
            <h1 className="card-title">{data[0].title}</h1>
            <p className="card-text">{data[0].description}.</p>
            <ButtomProduct infoboton={data[0].buttomInfo}/>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.cardImg}>
          <h5>{data[2].description}</h5>
        </div>
      </div>
        
    </div>
  )
}