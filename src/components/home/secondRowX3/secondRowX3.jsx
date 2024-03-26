import React from 'react'
import styles from './secondRowX3.module.css';

export const SecondRowX3 = () => {
  return (
    <div className={`container ${styles.contenedor}`}>
        <div className={`${styles.cardSmall}`}>
            <div>IMAGEN 1</div>
            <div>TEXTO 1</div>
        </div>
        <div className={`${styles.cardSmall}`}>
            <div>IMAGEN 2</div>
            <div>TEXTO 2</div>
        </div>
        <div>IMAGEN 3</div>
    </div>
  )
}
