import React, { useContext } from 'react';
import styles from './productsByGroup.module.css';
import Data2Context from '../../dataContext/data2Context';

export const ProductsByGroup = () => {

  const data = useContext(Data2Context);
  
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }


  return (
    <div className={styles.contenedor}>
      <div className={styles.products}>
        <h1>{data[0].title1}</h1>
        <div className={styles.description}>
          <div className={styles.titles}>
            <div>
              <p>{data[0].title2}</p>
            </div>
          </div>
          <div className={styles.texto}>{data[0].description}</div>
        </div>
      </div>
      
    </div>
  )
}
