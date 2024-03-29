import React from 'react'
import styles from './secondRowX3.module.css';

export const SecondRowX3 = () => {
  return (
    
    <div className={`container ${styles.contenedor}`}>

        <div className={`${styles.cardSmall}`}>
            <div className={styles.cardImg}>
              <img src="https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg" alt="" />
            </div>
            <div className={`${styles.textInt}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !</div>
        </div>
        <div className={`${styles.cardSmall}`}>
            <div className={styles.cardImg}>
              <img src="https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg" alt="" />
            </div>
            <div className={`${styles.textInt}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !</div>

        </div>
        <div className={styles.cardBig}>
          <img src="https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg" alt="" />
        </div>
    </div>
  )
}
