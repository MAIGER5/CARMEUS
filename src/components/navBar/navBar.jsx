import React from 'react';
import styles from './navBar.module.css'

export const NavBar = () => {
  return (
    <nav className='container'>
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
  )
}
