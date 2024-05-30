import React from 'react';
import styles from './firstRowX3.module.css';


export const FirstRowX3 = () => {

  const signo = ">";

  return (
    <div className={`${styles.contenedor}`}>
      <div>
        <h5>Cales</h5>
        <h3>{signo}</h3>
      </div>
      <div>
        <h5>Piedra Caliza & Carbonato</h5>
        <h3>{signo}</h3>
      </div>
      <div>
        <h5>Neutramol</h5>
        <h3>{signo}</h3>
      </div>
    </div>
  )
}
