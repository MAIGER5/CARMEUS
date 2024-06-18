import React, { useContext } from 'react';
import styles from './cardDatasheet.module.css';
import DataContext from '../../dataContext/dataContext';





export const CardDatasheet = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }



  return (
    <div className={styles.container}>
      <h1>DOCUMENTACION</h1>
      <section className={styles.contenedor}>
        <h1>Ficha Técnica</h1>
        <div>
          <div className={styles.lenguajes}>
            <span>{data[0].title}</span>
            <button>{data[0].icon} Descargar</button>
          </div>
          <div className={styles.lenguajes}>
            <span>{data[1].title}</span>
            <button>{data[1].icon} Descargar</button>
          </div>
        </div>

      </section>
    </div>
  )
}
