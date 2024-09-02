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
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CgMathMinus } from "react-icons/cg";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import carmeusWhite from '../utils/logos/CARMEUSE-and-Colombia.png';
import carmeusBlue from '../utils/logos/CARMEUSE-BLUE-and-Colombia.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openMenuMobil, setOpenMenuMobil] = useState(false);
  const [openMenuApli, setOpenMenuApli] = useState(false);
  const [openMenuProd, setOpenMenuProd] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScrolled);

    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setOpenMenuMobil(false);
        setOpenMenuApli(false);
        setOpenMenuProd(false);
      }
    };

    handleResize(); // Initialize the state based on the current window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const colorChangeNavbar = 
    openMenuMobil 
    ? styles.contenedorScrolled 
    : !scrolled && location.pathname === '/' 
    ? styles.contenedorHome 
    : scrolled 
    ? styles.contenedorScrolled 
    : styles.contenedorScrolled2;

  const logoChange = 
    openMenuMobil
    ? carmeusBlue
    :!scrolled && location.pathname === '/' 
    ? carmeusWhite 
    : carmeusBlue;

  const resetStates = ()=>{
    setOpenMenuMobil(false);
    setOpenMenuApli(false);
    setOpenMenuProd(false);
  }

  const handleClickNavigate = (path) => {
    navigate(path);
    setOpenMenuMobil(false)
    resetStates()
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  const handleClikOpenMenuMobil = () => {
    setOpenMenuMobil(true);
  };

  const handleClickCloseMenuMobil = () => {
    resetStates()
  };

  const handleClickOpenMenu = (handle) => {
    handle(true);
  };

  const handleClickCloseMenu = (handle) => {
    handle(false);
  };

  

  return (
    <div id={styles.navBar} className={`${styles.contenedor} ${colorChangeNavbar}`}>
      <section className={styles.navbarUper}>
        <ul>
          <li onClick={() => handleClickNavigate('/aboutUs')}>Acerca de Nosotros</li>
          <li onClick={() => handleClickNavigate('/news')}>Actualidad</li>
          {/* <li onClick={() => handleClickNavigate('/sigIn')}>Inicio Sesión</li> */}
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
          <li>
            <span onClick={()=> handleClickNavigate('/aplications')} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Aplicaciones</span>
            <ul id={styles.dropUno} className={`${styles.dropdowns}`}>

              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
              >
                <MdOutlineAgriculture /> <span className={`${styles.prueba}`} onClick={() => handleClickNavigate('/Aplications/agropecuario')}>Agricola</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/agropecuario/animal')}>Cuidado Animal</li>
                    <li onClick={() => handleClickNavigate('/Aplications/agropecuario/sugar')}>Producción de Azúcar</li>
                    <li onClick={() => handleClickNavigate('/Aplications/agropecuario/food')}>Industria Alimentaria</li>
                  </ul>
                )}
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
                                >Industria Química</span> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li onClick={() => handleClickNavigate('/Aplications/chemical/plasticRubber')}>Plástico y Cauchco</li>
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
                                  >Hierro & Acero</span> 
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
                <h6 onClick={() => handleClickNavigate('/products/cales')}>Productos Calcarios</h6>
                <ul className={styles.specialDropDos}>
                  <li onClick={() => handleClickNavigate('/products/cales/quicklime')}>Cal Viva</li>
                  <li 
                    className={`${styles.hidratada}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                  <span 
                    onClick={() => handleClickNavigate('/products/cales/hydratedlime')}
                  >Cal Hidratada</span> 
                  <GoTriangleRight/>
                  {hovered && (
                    <ul className={`${styles.dropUnoPuntoDos}`}>
                      <li onClick={() => handleClickNavigate('/products/cales/hydratedlimeTipoA')}>Hidratada Tipo A</li>
                      <li onClick={() => handleClickNavigate('/products/cales/hydratedlimeTipoB')}>Hidratada Tipo B</li>
                      <li onClick={() => handleClickNavigate('/products/cales/hydratedlimeTipoB')}>Mundo Ferretero</li>
                    </ul>
                  )}
                  </li>
                  <li onClick={() => handleClickNavigate('/products/cales/dolomiticlime')}>Cal Dòlomita</li>
                  <li onClick={() => handleClickNavigate('/products/cales/agriculturallime')}>Cal Agricola</li>
                </ul>
              </li>
              <li>
                <h6 onClick={() => handleClickNavigate('/products/stone')}>Piedra Caliza</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/products/stone/limestone')}>Agregados</li>
                  <li onClick={() => handleClickNavigate('/products/stone/carbonate')}>Carbonato</li>
                </ul>
              </li>
              <li>
                <h6>Productos Especiales</h6>
                <ul>
                  <li onClick={() => handleClickNavigate('/products/neutramol')}>Neutramol</li>
                </ul>
              </li>
            </ul>
          </li>
          <li onClick={() => handleClickNavigate('/carmeuseMas')} className={`${styles.menuPrincipal}`}> <span>Carmeuse</span> <BsFillPlusSquareFill id={styles.carmeuseMas}/> </li>

          {/* <li onClick={() => handleClickNavigate('/plasticRubber')} className={`${styles.menuPrincipal} `}>Sostenibilidad</li> */}
          <li onClick={() => handleClickNavigate('/services')} className={`${styles.menuPrincipal} `}>Servicios</li>
        </ul>
        <div className={styles.contactAndLogin}>
          <IoPerson onClick={() => handleClickNavigate('/sigIn')}/>
          <button onClick={() => handleClickNavigate('/contact')} className={`${styles.boton} ${styles.menuPrincipal} `}>Contacto</button>
        </div>
      </nav>
      <div className={styles.LogoMenuMobil}>
        <div className={styles.contenedorLogo}>
          <img 
            src={logoChange} 
            alt="logo" 
            onClick={() => handleClickNavigate('/')} 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className={styles.contenedorIcons}>
          <div onClick={() => handleClickNavigate('/sigIn')}>{!openMenuApli? <IoPerson/>: <IoSearchSharp/>}</div>
          {
            !openMenuMobil
            ? <div onClick={()=> handleClikOpenMenuMobil()} ><VscMenu/></div>
            : <div onClick={()=> handleClickCloseMenuMobil(setOpenMenuMobil)} ><IoMdClose/></div>
          }
          
        </div>

      {/* AQUI EMPIEZA EL MENU RESPONSIVE */}
      </div>
      <div className={openMenuMobil? styles.menuMobil: styles.menuMobilHidden}>
        <ul>
          <li onClick={()=> handleClickNavigate('/')} className={styles.itemsMenuMobil}>
            <span>Inicio</span>
          </li>
          <li onClick={()=> handleClickNavigate('/aboutUs')} className={styles.itemsMenuMobil}>
            <span>Nosotros</span>
          </li>
          <li className={styles.itemsMenuMobil}>
            <span onClick={()=> handleClickNavigate('/aplications')}>Aplicaciones</span> <span >{!openMenuApli?<FaPlus onClick={ ()=> handleClickOpenMenu(setOpenMenuApli)}/>: <CgMathMinus onClick={ ()=> handleClickCloseMenu(setOpenMenuApli)}/>}</span>
          </li>
            <ul className={!openMenuApli? styles.subMenuMobilHidden: styles.subMenuMobil}>
              <li onClick={()=>handleClickNavigate('/Aplications/agropecuario')}><MdOutlineAgriculture /> <span>Agropecuario</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/engeneerBuilding')}><BsBuildingGear /> <span>Ingenieria Civil & Construcción</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/chemical')}><SlChemistry /> <span>Industria Quimica</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/flueGasTreatment')}><MdOutlineGasMeter /> <span>Gases & Combustión</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/glassCeramic')}><SiEquinixmetal /> <span>Cerámica & Vidrio</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/steel')}><LuConstruction /> <span>Hiero & Acero</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/noFerrousMining')}><AiOutlineGold /> <span>Minería & Metales No Ferrosos</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/pccPulPaper')}><LiaNewspaper /> <span>Pulpa & Papel</span></li>
              <li onClick={()=>handleClickNavigate('/Aplications/waterTreatment')}><FaHandHoldingWater /> <span>Tratamiento de Agua</span></li>
            </ul>
            <li className={styles.itemsMenuMobil}>
            <span onClick={()=> handleClickNavigate('/products')}>Productos</span> <span >{!openMenuProd?<FaPlus onClick={ ()=> handleClickOpenMenu(setOpenMenuProd)}/>: <CgMathMinus onClick={ ()=> handleClickCloseMenu(setOpenMenuProd)}/>}</span>
          </li>
            <ul className={!openMenuProd? styles.subMenuMobilHidden: styles.subMenuMobil}>
              <li onClick={()=> handleClickNavigate('/products/cales/quicklime')}><span>Cal Viva</span></li>
              <li onClick={()=> handleClickNavigate('/products/cales/hydratedlime')}><span>Cal Hidratada</span></li>
              <li onClick={()=> handleClickNavigate('/products/cales/hydratedlimeTipoA')}><span>Cal Hidratada Tipo A</span></li>
              <li onClick={()=> handleClickNavigate('/products/cales/hydratedlimeTipoB')}><span>Cal Hidratada Tipo B</span></li>
              <li onClick={()=> handleClickNavigate('/products/cales/dolomiticlime')}><span>Cal Dolomita</span></li>
              <li onClick={()=> handleClickNavigate('/products/cales/agriculturallime')}><span>Cal Agricola</span></li>
              <li onClick={()=> handleClickNavigate('/products/stone/limestone')}><span>Piedra Caliza</span></li>
              <li onClick={()=> handleClickNavigate('/products/stone/carbonate')}><span>Carbonato</span></li>
              <li onClick={()=> handleClickNavigate('/products/neutramol')}><span>Neutramol</span></li>
            </ul>
          <li onClick={()=> handleClickNavigate('/services')} className={styles.itemsMenuMobil}>
            <span>Servicios</span>
          </li>
          <li onClick={() => handleClickNavigate('/carmeuseMas')} > 
            <span>Carmeuse</span> <BsFillPlusSquareFill id={styles.carmeuseMas}/>
          </li>
          {/* <li onClick={() => handleClickNavigate('/sigIn')} > 
            <span>Iniciar sesion</span>
          </li> */}
        </ul>
        <div onClick={()=> handleClickNavigate('/contact')} className={styles.contacto}>Contacto</div>
      </div>

    </div>
  );
};
