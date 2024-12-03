import React from 'react';
import styles from './cardProductEmpaque.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export const CardProductEmpaque = ({nameProduct, peso, imagen}) => {


  return (
    <div className={styles.tarjet}>
      <div className={styles.card}>
          <img src={imagen} alt="" />
      </div>
      <div className={styles.textTarjet}> {nameProduct} </div>
      <div className={styles.peso}> {peso} </div>
      <span className={styles.carrito}>
        Agregar al Carrito <ShoppingCartIcon color='action'/>
      </span>
    </div>
  )
}
