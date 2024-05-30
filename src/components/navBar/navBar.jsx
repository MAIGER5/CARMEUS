import React from 'react';
import styles from './navBar.module.css';
import { VscMenu } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import { useLocation } from 'react-router-dom'


export const NavBar = () => {

  const location = useLocation();


  return (
    <div className={`${location.pathname === '/'? styles.contenedorHome: styles.contenedor }`}>
      <section className={styles.navbarUper}>
        <ul>
            <li>Acerca de Nosotros</li>
            <li>Actualidad</li>
            <li>Busqueda</li>
            <li>En</li>
        </ul>
      </section>
      <nav className={styles.navbarMain}>
          <img src={carmeusWhite} alt="" />
          <ul>
            <li><a href="">Nosotros</a></li>
            <li>
              <a className={styles.triangulo} href="">Aplicaciones </a>
              <ul id={styles.dropUno} className={`${styles.dropdowns}`}>
                <li>Agricultura</li>
                <li>Sector Construcción</li>
                <li>Industria Químca</li>
                <li>Tratamiento de Gases & Combustión</li>
                <li>Cerámica & Vidrio</li>
                <li>Hierro & Acero</li>
                <li>Minería & Metales No Ferrosos</li>
                <li>PCC y Pulpa & Paper</li>
                <li>Tratamiento de Agua</li>
              </ul>
            </li>
            <li>
              <a className={styles.triangulo} href="">Productos </a>
              <ul id={styles.dropDos} className={`${styles.dropdowns}`}>
                <li>
                  <h6>Cales</h6>
                  <ul>
                    <li>Cal Viva</li>
                    <li>Cal Hidratada</li>
                    <li>Cal Dòlomita</li>
                    <li>Cal Agricola</li>
    
                  </ul>
                </li>
                <li>
                  <h6>Pidera</h6>
                  <ul>
                    <li>Piedra Caliza</li>
                    <li>Carbonato</li>
                  </ul>
                </li>
                <li>
                  <h6>Nuevos Productos</h6>
                  <ul>
                    <li>Neutramol</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="">Sostenibilidad</a></li>
            <li><a href="">Servicios</a></li>
            {/* <li>
              <a className={styles.boton} href="">Contacto</a>
              <a className={styles.botonHiden} href=""></a>
            </li> */}
          </ul>
          <a className={styles.boton} href="">Contacto</a>
      </nav>
      <div className={styles.menuMobil}>
        <div className={styles.contenedorLogo}>
          <img src={carmeusWhite} alt="" />
        </div>
        <div className={styles.contenedorIcons}>
          <div><IoSearchSharp/></div>
          <div><VscMenu/></div>
        </div>
      </div>
    </div>
  )
}
