
import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css';
import { VscMenu } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import carmeusBlue from '../utils/logos/blue.png';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScrolled);

    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);

  const colorChangeNavbar = !scrolled && location.pathname === '/' 
    ? styles.contenedorHome 
    : scrolled && location.pathname === '/' 
    ? styles.contenedorScrolled 
    : !scrolled && location.pathname !== '/' 
    ? styles.contenedorScrolled2 
    : styles.contenedorScrolled;

  const logoChange = !scrolled && location.pathname === '/' ? carmeusWhite : carmeusBlue;

  const handleClickNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`${styles.contenedor} ${colorChangeNavbar}`}>
      <section className={styles.navbarUper}>
        <ul>
          <li onClick={() => handleClickNavigate('/aboutUs')}>Acerca de Nosotros</li>
          <li onClick={() => handleClickNavigate('/news')}>Actualidad</li>
          <li onClick={() => handleClickNavigate('/search')}>Busqueda</li>
          <li onClick={() => handleClickNavigate('/en')}>En</li>
        </ul>
      </section>
      <nav>
        <img 
          src={logoChange} 
          alt="logo" 
          onClick={() => handleClickNavigate('/')} 
          style={{ cursor: 'pointer' }}
        />
        <ul>
          <li onClick={() => handleClickNavigate('/aboutUs')} className={`${styles.menuPrincipal}`}>Nosotros</li>
          <li>
            <span onClick={()=> handleClickNavigate('/aplications')} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Aplicaciones</span>
            <ul id={styles.dropUno} className={`${styles.dropdowns}`}>
              <li onClick={() => handleClickNavigate('/CalAgricola')}>Soluciones Agricolas</li>
              <li onClick={() => handleClickNavigate('/construction')}>Ingenieria Civil & Construcción</li>
              <li onClick={() => handleClickNavigate('/chemical')}>Industria Químca</li>
              <li onClick={() => handleClickNavigate('/gas')}>Tratamiento de Gases & Combustión</li>
              <li onClick={() => handleClickNavigate('/ceramics')}>Cerámica & Vidrio</li>
              <li onClick={() => handleClickNavigate('/steel')}>Hierro & Acero</li>
              <li onClick={() => handleClickNavigate('/mining')}>Minería & Metales No Ferrosos</li>
              <li onClick={() => handleClickNavigate('/pcc')}>PCC y Pulpa & Paper</li>
              <li onClick={() => handleClickNavigate('/water')}>Tratamiento de Agua</li>
            </ul>
          </li>
          <li>
            <span onClick={()=> handleClickNavigate('/products')} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Productos</span>
            <ul id={styles.dropDos} className={`${styles.dropdowns}`}>
              <li>
                <h6>Cales</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/quicklime')}>Cal Viva</li>
                  <li onClick={() => handleClickNavigate('/hydratedlime')}>Cal Hidratada</li>
                  <li onClick={() => handleClickNavigate('/dolomiticlime')}>Cal Dòlomita</li>
                  <li onClick={() => handleClickNavigate('/agriculturallime')}>Cal Agricola</li>
                </ul>
              </li>
              <li>
                <h6>Piedra</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/limestone')}>Piedra Caliza</li>
                  <li onClick={() => handleClickNavigate('/carbonate')}>Carbonato</li>
                </ul>
              </li>
              <li>
                <h6>Nuevos Productos</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/neutramol')}>Neutramol</li>
                </ul>
              </li>
            </ul>
          </li>
          <li onClick={() => handleClickNavigate('/sustainability')}  className={`${styles.menuPrincipal} `}>Sostenibilidad</li>
          <li onClick={() => handleClickNavigate('/services')} className={`${styles.menuPrincipal} `}>Servicios</li>
        </ul>
        <button onClick={() => handleClickNavigate('/contact')} className={`${styles.boton} ${styles.menuPrincipal} `}>Contacto</button>
      </nav>
      <div className={styles.menuMobil}>
        <div className={styles.contenedorLogo}>
          <img 
            src={logoChange} 
            alt="logo" 
            onClick={() => handleClickNavigate('/')} 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles.contenedorIcons}>
          <div onClick={() => handleClickNavigate('/search')}><IoSearchSharp/></div>
          <div onClick={() => handleClickNavigate('/menu')}><VscMenu/></div>
        </div>
      </div>
    </div>
  );
};


// import React, { useEffect, useState } from 'react';
// import styles from './navBar.module.css';
// import { VscMenu } from "react-icons/vsc";
// import { IoSearchSharp } from "react-icons/io5";
// import carmeusWhite from '../utils/logos/carmeusWhite.png';
// import carmeusBlue from '../utils/logos/blue.png';
// import { Link, useLocation, useNavigate } from 'react-router-dom'


// export const NavBar = () => {

//   const navigate = useNavigate();

//   const location = useLocation();

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(()=>{
//     const handelScrolled = ()=>{
//       window.scrollY > 0 ? setScrolled(true): setScrolled(false)
//     };

//     window.addEventListener('scroll', handelScrolled);

//     return ()=>{
//       window.removeEventListener('scroll', handelScrolled);
//     };

//   },[])

//   const colorChangeNavbar = !scrolled && location.pathname ==='/'? styles.contenedorHome: scrolled && location.pathname ==='/'? styles.contenedorScrolled: !scrolled && location.pathname !=='/'? styles.contenedorScrolled2: styles.contenedorScrolled

//   const logoChange = !scrolled && location.pathname ==='/'? carmeusWhite : scrolled && location.pathname ==='/'? carmeusBlue: !scrolled && location.pathname !=='/'? carmeusBlue: carmeusBlue
  
//   const logoChangeMobil = !scrolled && location.pathname ==='/'? carmeusWhite : scrolled && location.pathname ==='/'? carmeusBlue: !scrolled && location.pathname !=='/'? carmeusBlue: carmeusBlue

//   const handleCickNavigate = (path)=>{
//     navigate(path)
//   }


//   return (
//     <div className={`${styles.contenedor} ${colorChangeNavbar}`}>
//       <section className={styles.navbarUper}>
//         <ul>
//             <li>Acerca de Nosotros</li>
//             <li>Actualidad</li>
//             <li>Busqueda</li>
//             <li>En</li>
//         </ul>
//       </section>
//       <nav className={logoChange}>
//           <img  src={logoChange} alt="" />
//           <ul>
//             <li onClick={()=>{handleCickNavigate('/aboutUs')}}><a href="">Nosotros</a>
//             </li>
//             <li>
//               <a className={styles.triangulo} href="">Aplicaciones </a>
//               <ul id={styles.dropUno} className={`${styles.dropdowns}`}>
//                 <li>Agricultura</li>
//                 <li>Sector Construcción</li>
//                 <li>Industria Químca</li>
//                 <li>Tratamiento de Gases & Combustión</li>
//                 <li>Cerámica & Vidrio</li>
//                 <li>Hierro & Acero</li>
//                 <li>Minería & Metales No Ferrosos</li>
//                 <li>PCC y Pulpa & Paper</li>
//                 <li>Tratamiento de Agua</li>
//               </ul>
//             </li>
//             <li>
//               <a className={styles.triangulo} href="">Productos </a>
//               <ul id={styles.dropDos} className={`${styles.dropdowns}`}>
//                 <li>
//                   <h6>Cales</h6>
//                   <ul>
//                     <li>Cal Viva</li>
//                     <li>Cal Hidratada</li>
//                     <li>Cal Dòlomita</li>
//                     <li>Cal Agricola</li>
    
//                   </ul>
//                 </li>
//                 <li>
//                   <h6>Pidera</h6>
//                   <ul>
//                     <li>Piedra Caliza</li>
//                     <li>Carbonato</li>
//                   </ul>
//                 </li>
//                 <li>
//                   <h6>Nuevos Productos</h6>
//                   <ul>
//                     <li>Neutramol</li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li><a href="">Sostenibilidad</a></li>
//             <li><a href="">Servicios</a></li>
//             {/* <li>
//               <a className={styles.boton} href="">Contacto</a>
//               <a className={styles.botonHiden} href=""></a>
//             </li> */}
//           </ul>
//           <a className={styles.boton} href="">Contacto</a>
//       </nav>
//       <div className={styles.menuMobil}>
//         <div className={styles.contenedorLogo}>
//           <img src={logoChangeMobil} alt="" />
//         </div>
//         <div className={styles.contenedorIcons}>
//           <div><IoSearchSharp/></div>
//           <div><VscMenu/></div>
//         </div>
//       </div>
//     </div>
//   )
// }
