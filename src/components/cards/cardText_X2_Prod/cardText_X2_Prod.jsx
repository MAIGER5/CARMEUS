import React, { useContext } from 'react';
import styles from './cardText_X2_Prod.module.css';
import DataContext from '../../dataContext/dataContext';





export const CardText_X2_Prod = () => {

  const data = useContext(DataContext)

  return (
    <div className={styles.contenedor}>
      <div className={styles.cardText}>
        <h1>{data[0].title1}</h1>
        <span>{data[0].description1}</span>
      </div>
      <div className={styles.cardText}>
        <h1>{data[0].title2}</h1>
        <span>{data[0].description2}</span>
        <ol>
          <li>{data[0].vineta1}</li>
          <li>{data[0].vineta2}</li>
          <li>{data[0].vineta3}</li>
        </ol>
      </div>
    </div>
  )
}
