import React from 'react';
import styles from './navBar.module.css';
import { useLocation } from 'react-router-dom'


export const NavBar = () => {

  const location = useLocation();


  return (
    <div className={`${location.pathname === '/'? styles.contenedorHome: styles.contenedor }`}>
      <section>
        <ul>
            <li>Acerca de Nosotros</li>
            <li>Actualidad</li>
            <li>Busqueda</li>
            <li>En</li>
        </ul>
      </section>
      <nav className=''>
          <img src="https://innofuelenergy.com/wp-content/uploads/2020/04/Carmeuse-Logo_2154-C.png" alt="" />
          <ul>
            <li><a href="">Nosotros</a></li>
            <li>
              <a className={styles.triangulo} href="">Aplicaciones </a>
              <ul className={styles.dropdowns}>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
                <li>pieda caliza</li>
              </ul>
            </li>
            <li>
              <a className={styles.triangulo} href="">Productos </a>
              <ul className={styles.dropdowns}>
                <li>Cal Hidratada</li>
                <li>Cal Hidratada</li>
                <li>Cal Hidratada</li>
                <li>Cal Hidratada</li>
              </ul>
            </li>
            <li><a href="">Sostenibilidad</a></li>
            <li>
              <a className={styles.boton} href="">Contacto</a>
              <a className={styles.botonHiden} href=""></a>
            </li>
          </ul>
      </nav>
    </div>
  )
}
