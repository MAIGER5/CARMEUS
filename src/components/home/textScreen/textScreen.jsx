import React from 'react';
import styles from './textScreen.module.css';
import { useNavigate } from 'react-router-dom';




export const TextScreen = () => {

  const navigate = useNavigate();

  const handleClickNavigate = (path)=>{
    navigate(path)
  }

  return (

    <div className={styles.contenedor}>
        <h1>IMPACTANTO LA VIDA COTIDIANA</h1>
        <p>Carmeuse Colombia, líder en la producción de cal y minerales, ofrece un suministro fiable y consistente. Nos comprometemos a optimizar procesos y asegurar calidad y sostenibilidad en cada producto, contribuyendo a un futuro más eficiente y respetuoso con el medio ambiente..</p>
        <button onClick={ ()=> handleClickNavigate('/aboutUs')} className={`${styles.boton}`}type="submit">Acerca de Nosotros</button>
    </div>

  )
}
