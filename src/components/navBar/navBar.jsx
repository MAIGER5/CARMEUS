import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css';
import { VscMenu } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import carmeusBlue from '../utils/logos/blue.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'


export const NavBar = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const handelScrolled = ()=>{
      window.scrollY > 0 ? setScrolled(true): setScrolled(false)
    };

    window.addEventListener('scroll', handelScrolled);

    return ()=>{
      window.removeEventListener('scroll', handelScrolled);
    };

  },[])

  const colorChangeNavbar = !scrolled && location.pathname ==='/'? styles.contenedorHome: scrolled && location.pathname ==='/'? styles.contenedorScrolled: !scrolled && location.pathname !=='/'? styles.contenedorScrolled2: styles.contenedorScrolled

  const logoChange = !scrolled && location.pathname ==='/'? carmeusWhite : scrolled && location.pathname ==='/'? carmeusBlue: !scrolled && location.pathname !=='/'? carmeusBlue: carmeusBlue
  
  const logoChangeMobil = !scrolled && location.pathname ==='/'? carmeusWhite : scrolled && location.pathname ==='/'? carmeusBlue: !scrolled && location.pathname !=='/'? carmeusBlue: carmeusBlue

  const handleCickNavigate = (path)=>{
    navigate(path)
  }


  return (
    <div className={`${styles.contenedor} ${colorChangeNavbar}`}>
      <section className={styles.navbarUper}>
        <ul>
            <li>Acerca de Nosotros</li>
            <li>Actualidad</li>
            <li>Busqueda</li>
            <li>En</li>
        </ul>
      </section>
      <nav className={logoChange}>
          <img onClick={()=>handleCickNavigate('/')} src={logoChange} alt="" />
          <ul>
            <li onClick={()=>handleCickNavigate('/aboutUs')}><a href="">Nosotros</a>
            </li>
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
              <a onClick={()=>handleCickNavigate('/products')} className={styles.triangulo} href="">Productos </a>
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
          <img onClick={()=>handleCickNavigate('/')} src={logoChangeMobil} alt="" />
        </div>
        <div className={styles.contenedorIcons}>
          <div><IoSearchSharp/></div>
          <div><VscMenu/></div>
        </div>
      </div>
    </div>
  )
}
