import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './firstRowX3.module.css';


export const FirstRowX3 = () => {

  const navigate = useNavigate();

  const handleClickNavigate = (path)=>{
    navigate(path)
  }

  const signo = ">";

  return (
    <div className={`${styles.contenedor}`}>
      <div onClick={()=> handleClickNavigate('/products/cales')} className={styles.boxes}>
        <h5>Productos Calcarios</h5>
        <h3>{signo}</h3>
      </div>
      <div onClick={()=> handleClickNavigate('/products/stone')} className={styles.boxes}>
        <h5>Piedra Caliza</h5>
        <h3>{signo}</h3>
      </div>
      <div onClick={()=> handleClickNavigate('/products/neutramol')} className={styles.boxes}>
        <h5>Productos Especiales</h5>
        <h3>{signo}</h3>
      </div>
    </div>
  )
}
