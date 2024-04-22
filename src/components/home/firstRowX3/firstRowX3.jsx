import React from 'react';
import styles from './firstRowX3.module.css';


export const FirstRowX3 = () => {
  return (
    <div className={`container ${styles.contenedor}`}>
        <div>Aplicación & Mercados</div>
        <div>Prodcutos & Servicios</div>
        <div>Sustentabilidad</div>
    </div>
  )
}
