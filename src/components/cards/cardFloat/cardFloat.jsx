import React, { useContext } from 'react';
import styles from './cardFloat.module.css'
import DataContext from '../../dataContext/dataContext'
import { ButtomOther } from '../../buttoms/buttomOther/buttomOther';

export const CardFloat = () => {

  const data = useContext(DataContext)



  return (
    <div className={styles.contenedor}>
      <div className={styles.images}>
        <img src={data[0].image} alt="" />
      </div>
      <div className={styles.bodyText}>
        <h3>{data[0].title}</h3>
        <a>{data[0].description}</a>
      </div>
      <div className={styles.Buttomes}>
        <ButtomOther infoboton={data[0].infoButtom}/>
      </div>
    </div>
  )
}
