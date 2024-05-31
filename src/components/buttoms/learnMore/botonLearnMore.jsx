import React from 'react';
import styles from './botonLearnMore.module.css'

export const BotonLearnMore = ( { infoboton }) => {
  return (
    <button className={`btn btn-primary ${styles.contenedor}`}type="submit">{infoboton} </button>
  )
}
