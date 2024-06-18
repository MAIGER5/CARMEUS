import React, { useContext, useEffect, useRef } from 'react';
import styles from './cardText_X2_Prod.module.css';
import DataContext from '../../dataContext/dataContext';

export const CardText_X2_Prod = () => {


  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    const height1 = cardRef1.current.offsetHeight;
    const height2 = cardRef2.current.offsetHeight;
    const maxHeight = Math.max(height1, height2);
    !window.innerWidth > 1250 ? (
      cardRef1.current.style.height = `${maxHeight}px`,
      cardRef2.current.style.height = `${maxHeight}px`
    ) : null;
    
    
  }, []);

  return (
    <div className={styles.contenedor}>
      <div className={styles.cardText} ref={cardRef1}>
        <h1>{data[0].title1}</h1>
        <span>{data[0].description1}</span>
        <h6>{data[0].formula}</h6>
        <div className={styles.especificacion}>
          <span>Los Rangos típicos son los siguientes:</span>
          <div>
            <span><strong>{data[0].especificacion1}</strong>{data[0].especificacion1Text}</span><br />
            <span><strong>{data[0].especificacion2}</strong>{data[0].especificacion2Text}</span><br />
            <span><strong>{data[0].especificacion3}</strong>{data[0].especificacion3Text}</span><br />

          </div>
        </div>
      </div>
      <div className={styles.cardText} ref={cardRef2}>
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

    </div>
  );
}