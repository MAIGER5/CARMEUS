import React from 'react';
import styles from './modals.module.css';
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";



export const Modals = ({response, infoModal}) => {


  const mail = response?.mail || '';
  const message1 = infoModal?.text1 || '';
  const message2 = infoModal?.text2 || ''

  return (
    <div className={styles.card}> 
      <button className={styles.dismiss} type="button">×</button> 
      <div className={styles.header}> 

        <div className={styles.divImageV}>
          <div className={styles.image}>
            <FaCheck />
          </div> 
        </div> 
        <div className={styles.content}>
          <span className={styles.title}>{message1}</span> 
          <p className={styles.message}>{message2} {mail || ''} </p> 
        </div> 
      </div> 
    </div>
  )
}
