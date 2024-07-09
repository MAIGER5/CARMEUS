import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css';
import { VscMenu } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction, LuDownload } from 'react-icons/lu';
import { MdOutlineAgriculture, MdOutlineGasMeter } from 'react-icons/md';
import { SiEquinixmetal } from 'react-icons/si';
import { FaHandHoldingWater } from 'react-icons/fa';
import { LiaNewspaper } from 'react-icons/lia';
import { AiOutlineGold } from 'react-icons/ai';
import carmeusWhite from '../utils/logos/carmeusWhite.png';
import carmeusBlue from '../utils/logos/blue.png';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div id={styles.navBar} className={`${styles.contenedor} ${colorChangeNavbar}`}>
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
              <li onClick={() => handleClickNavigate('/agricola')}>
                <MdOutlineAgriculture /> <span>Soluciones Agricolas</span>
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
              >
                <BsBuildingGear /> <span className={`${styles.prueba}`} onClick={() => handleClickNavigate('/Aplications/engeneerBuilding')}>Ingenieria Civil & Construcción</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/engeneerBuilding/aggregado')}>Agregados</li>
                    <li onClick={() => handleClickNavigate('/Aplications/engeneerBuilding/asphalt')}>Asfalto</li>
                    <li onClick={() => handleClickNavigate('/Aplications/engeneerBuilding/soilTreatment')}>Tratamiento de Suelos</li>
                  </ul>
                )}
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SlChemistry /> <span 
                                  className={`${styles.prueba}`} 
                                  onClick={() => handleClickNavigate('/Aplications/chemical')}
                                >Industria Quimica</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/chemical/plasticRubber')}>Plástico y Cauhco</li>
                    <li onClick={() => handleClickNavigate('/Aplications/chemical/chemicalCompounds')}>Compuesto Químico</li>
                    <li onClick={() => handleClickNavigate('/Aplications/chemical/chemicalCalciumSalts')}>Sales de Calcio</li>
                  </ul>
                )}
              </li>
              <li onClick={() => handleClickNavigate('/Aplications/flueGasTreatment')}>
                <MdOutlineGasMeter /> <span>Tratamiento de Gases & Combustión</span>
              </li>
              <li onClick={() => handleClickNavigate('/Aplications/glassCeramic')}>
                <SiEquinixmetal /> <span>Cerámica & Vidrio</span>
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <LuConstruction /><span 
                                    className={`${styles.prueba}`}
                                    onClick={() => handleClickNavigate('/Aplications/steel')}
                                  >Hiero & Acero</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/steel/iron')}>Producción de Hierro</li>
                    <li onClick={() => handleClickNavigate('/Aplications/steel/acero')}>Producción de Acero</li>
                  </ul>
                )}
              </li>
              <li onClick={() => handleClickNavigate('/Aplications/noFerrousMining')}>
                <AiOutlineGold /> <span>Minería & Metales No Ferrosos</span>
              </li>
              <li onClick={() => handleClickNavigate('/Aplications/pccPulPaper')}>
                <LiaNewspaper /> <span>Pulpa & Papel</span>
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaHandHoldingWater /><span 
                                        className={`${styles.prueba}`}
                                        onClick={() => handleClickNavigate('/Aplications/waterTreatment')}
                                      >Tratamiento de Agua</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/waterTreatment/drinkWater')}>Agua Potable</li>
                    <li onClick={() => handleClickNavigate('/Aplications/waterTreatment/wasteWater')}>Aguas Residuales</li>
                    <li onClick={() => handleClickNavigate('/Aplications/waterTreatment/industryWater')}>Tratamiento Industrial del Agua</li>
                  </ul>
                )}
              </li>
            </ul>
          </li>
          <li>
            <span onClick={()=> handleClickNavigate('/products')} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Productos</span>
            <ul id={styles.dropDos} className={`${styles.dropdowns}`}>
              <li>
                <h6 onClick={() => handleClickNavigate('/products/cales')}>Cales</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/products/cales/quicklime')}>Cal Viva</li>
                  <li onClick={() => handleClickNavigate('/products/cales/hydratedlime')}>Cal Hidratada</li>
                  <li onClick={() => handleClickNavigate('/products/cales/dolomiticlime')}>Cal Dòlomita</li>
                  <li onClick={() => handleClickNavigate('/products/cales/agriculturallime')}>Cal Agricola</li>
                </ul>
              </li>
              <li>
                <h6 onClick={() => handleClickNavigate('/products/stone')}>Piedra</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/products/stone/limestone')}>Piedra Caliza</li>
                  <li onClick={() => handleClickNavigate('/products/stone/carbonate')}>Carbonato</li>
                </ul>
              </li>
              <li>
                <h6>Nuevos Productos</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/products/neutramol')}>Neutramol</li>
                </ul>
              </li>
            </ul>
          </li>
          <li onClick={() => handleClickNavigate('/plasticRubber')} className={`${styles.menuPrincipal} `}>Sostenibilidad</li>
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
