import React from 'react';
import styles from './modals.module.css';
import { IoIosWarning } from "react-icons/io";




export const ModalsError = ({errors, infoModalError}) => {


  const message1 = infoModalError?.text1 || '';
  const message2 = infoModalError?.text2 || ''

  return (
    <div className={styles.card}> 
      <button className={styles.dismiss} type="button">×</button> 
      <div className={styles.header}> 

        <div className={styles.divImageError}>
          <div className={styles.image}>
            <IoIosWarning />
          </div> 
        </div> 
        <div className={styles.content}>
          <span className={styles.title}>{message1}</span> 
          <ol className={styles.message}>{ errors? errors.map((ele, index)=>(<li key={index}>{ele.message}</li>)):''}</ol>
        </div> 
      </div> 
    </div>
  )
}
