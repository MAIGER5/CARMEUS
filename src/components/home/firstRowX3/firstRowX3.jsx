import React from 'react';
import { Link } from 'react-router-dom';
import styles from './firstRowX3.module.css';


export const FirstRowX3 = () => {

  const signo = ">";

  return (
    <div className={`${styles.contenedor}`}>
      <Link to={'/cales'} className={styles.boxes}>
        <h5>Cales</h5>
        <h3>{signo}</h3>
      </Link>
      <Link to={'/'} className={styles.boxes}>
        <h5>Piedra</h5>
        <h3>{signo}</h3>
      </Link>
      <Link to={'/'} className={styles.boxes}>
        <h5>Neutramol</h5>
        <h3>{signo}</h3>
      </Link>
    </div>
  )
}
