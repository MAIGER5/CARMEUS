import React, { useContext } from 'react';
import styles from './cardProtoypeProd.module.css';
import DataContext from '../../dataContext/dataContext';




export const CardProtoypeProd = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.contenedor}>

      <div className={styles.cartFirstText}>
        <div className={styles.cardDesciption}>
          <h1>{data[0].title1}</h1>
          <p>{data[0].description}</p>
          <div className={styles.contEstadistic}>
            <div className={styles.cifrasEstad}>
              <h1>{data[0].cifra1}</h1>
              <span>Ton de Acero / año</span>
            </div>
            <div className={styles.cifrasEstad}>
              <h1>{data[0].cifra2}</h1>
              <span>Ton de Acero / año</span>
            </div>
            <div className={styles.cifrasEstad}>
              <h1>{data[0].cifra3}</h1>
              <span>Ton de Acero / año</span>
            </div>
          </div>
          <div className={styles.preguntas}>
            <p>Tiene alguna pregunta  acerca de este producto?</p>
            <button>Pregunta a nuestros Especialistas</button>
          </div>
        </div>
        <div className={styles.cardConsiderations}>
          <h1>Consideraciones Claves</h1>
          <ul>
            {
              data[0].consideraciones?
              data[0].consideraciones.map((ele, index)=> (
                <li key={index}>{ele}</li>
              )) : ''
            }
          </ul>
        </div>
      </div>

    </div>
  )
}
