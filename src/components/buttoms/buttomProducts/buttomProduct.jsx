import React from 'react';
import styles from './buttomProduct.module.css'

export const ButtomProduct = ( { infoboton }) => {
  return (
    <button className={`btn btn-primary ${styles.contenedor}`}type="submit">{infoboton} </button>
  )
}
