import React, { useContext } from 'react';
import styles from './cardUses.module.css'
import DataContext from '../../dataContext/dataContext';





export const CardUses = () => {


  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.contenedor}>
      <h1>{data[0].title2}</h1>
      <span>{data[0].description2}</span>
      <div className={styles.listaBenef}>
        {
          data[0].benefits?
          data[0].benefits.map((ele, ind)=> (
            <li key={ind}>{ele}</li>
          ))
          : 'No hay Beneficios'
        }
      </div>
    </div>
  )
}
