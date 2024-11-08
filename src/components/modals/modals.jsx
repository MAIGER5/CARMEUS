import React from 'react';
import styles from './modals.module.css';
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";



export const Modals = ({response}) => {

  const mail = response?.mail || '';

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
          <span className={styles.title}>Cliente creado</span> 
          <p className={styles.message}>Muchas gracias por registrarse. Usted recibira un mensaje de confirmaciòn a su correo {mail || 'no disponible'} </p> 
        </div> 
      </div> 
    </div>
  )
}
