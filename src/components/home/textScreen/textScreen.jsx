import React from 'react';
import styles from './textScreen.module.css';

export const TextScreen = () => {
  return (
    <div className={styles.contenedor}>
        <h1>CRECE CON NOSOTROS</h1>
        <p>Fabricante líder de cal, piedra caliza y productos minerales, proporcionamos un suministro fiable y ayudamos a nuestros clientes a optimizar sus procesos, mejorar la seguridad y reducir su huella de carbono.</p>
        <button className={`${styles.boton}`}type="submit">Explora Nuestras Soluciones</button>
    </div>
  )
}
