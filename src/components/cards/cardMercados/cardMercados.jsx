import React, { useContext } from 'react';
import styles from './cardMercados.module.css';
import DataContext from '../../dataContext/dataContext';




export const CardMercados = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }



  return (
    <div className={styles.container}>
      <h1>MERCADOS RELACIONADOS</h1>
      <section className={styles.contenedor}>
        {
          data?
          data.map((ele, index)=> (
            <div key={index} className={styles.cards}>
              {ele.icon}
              <p>{ele.title}</p>
            </div>
          )):''
        }
      </section>
    </div>
  )
}
