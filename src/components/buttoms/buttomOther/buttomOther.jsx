import React from 'react';
import styles from './buttomOther.module.css'

export const ButtomOther = ( { infoboton }) => {
  return (
    <button className={`btn btn-primary ${styles.contenedor}`}type="submit">{infoboton}</button>
  )
}
