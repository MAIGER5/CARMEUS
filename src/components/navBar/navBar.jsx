import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css';
import { VscMenu } from "react-icons/vsc";
import { SlChemistry } from 'react-icons/sl';
import { BsBuildingGear } from 'react-icons/bs';
import { LuConstruction } from 'react-icons/lu';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import PopoverLogin from './popoverLogin';

export const NavBar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openMenuMobil, setOpenMenuMobil] = useState(false);
  const [openMenuApli, setOpenMenuApli] = useState(false);
  const [openMenuProd, setOpenMenuProd] = useState(false);
  const [localStorageFillUp, setLocalStorageFillUp] = useState(false);

  const selectorLoginClientToken = useSelector(state => state.login.tokenClient);


  const selectorLoginEmployeeToken = useSelector(state => state.loginEmployee.tokenEmployee);

  const selectorLoginStateClient = useSelector(state => state.login)
  const selectorLoginStateEmployee = useSelector(state => state.loginEmployee)

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


  const colorChange = () => {
    if (openMenuMobil) {
      return styles.contenedorScrolled;
    } else if (!scrolled && location.pathname === '/') {
      return styles.contenedorHome;
    } else if (scrolled) {
      return styles.contenedorScrolled;
    } else {
      return styles.contenedorScrolled2;
    }
  }

  const colorChangeNavbar = colorChange()


 const logoDiferent = ()=>{
  if (openMenuMobil) {
    return carmeusBlue
  } else if(!scrolled && location.pathname === '/'){
    return carmeusWhite
  } else {
    return carmeusBlue
  }
 }

  const logoChange = logoDiferent();

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

  const menuCarmeuseMas = ()=>{
    if (selectorLoginClientToken) {
      return '/sigIn/dashBoardClient'
    } else if(selectorLoginEmployeeToken){
      return '/sigIn/dashBoardEmployee'
    } else {
      return '/carmeuseMas'
    }
  }

  const changeCarmeuseMas = menuCarmeuseMas()

  const changeLogoPerson = ()=>{
    if (!openMenuApli && !localStorageFillUp) {
      return <IoPersonOutline onClick={()=>handleClickNavigate('/sigIn')} />
    } else if(!openMenuApli && localStorageFillUp){
      return <PopoverLogin infoAvatar={selectorLoginClientToken? selectorLoginStateClient: selectorLoginStateEmployee} />
    } else {
      return ''
    }
  }
  
  const logoPersonOPover = changeLogoPerson();

  //LA SIGUIENT FUNCION TIENE EL OBJETIVO DE VERIFICAR SI EXITE LA PROPIEDAD TOKEN Y COMPANY EN EL LOCALSTORAGE Y CAMBIAN EL LOGO DE PERSON POR UN AVATAR 


  useEffect(() => {
    !!selectorLoginClientToken || !!selectorLoginEmployeeToken? setLocalStorageFillUp(true): setLocalStorageFillUp(false);
  }, [selectorLoginClientToken, selectorLoginEmployeeToken]);


  return (
    <div id={styles.navBar} className={`${styles.contenedor} ${colorChangeNavbar}`}>
      <section className={styles.navbarUper}>
        <ul>
          <li><Link to={'/aboutUs'}>Acerca de Nosotros</Link></li>
          <li><Link to={'/news'}>Actualidad</Link></li>
          <li><Link to={'/en'}>En</Link></li>
        </ul>
      </section>
      <nav>
        <Link to={'/'}>
          <img 
            src={logoChange} 
            alt="logo" 
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <ul>
          <li>
            <Link to={'/aplications'} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Aplicaciones</Link>
            <ul id={styles.dropUno} className={`${styles.dropdowns}`}>

              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
              >
                <MdOutlineAgriculture /> <Link to={'/Aplications/agropecuario'} className={`${styles.prueba}`}>Agricola</Link> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li><Link className={styles.linkstyles} to={'/Aplications/agropecuario/animal'}>Cuidado Animal</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/agropecuario/sugar'}>Producción de Azúcar</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/agropecuario/food'}>Industria Alimentaria</Link></li>
                  </ul>
                )}
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
              >
                <BsBuildingGear /> <Link to={'/Aplications/engeneerBuilding'} className={`${styles.prueba}`}>Ingenieria Civil & Construcción</Link> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li><Link className={styles.linkstyles} to={'/Aplications/engeneerBuilding/aggregado'}>Agregados</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/engeneerBuilding/asphalt'}>Asfalto</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/engeneerBuilding/soilTreatment'}>Tratamiento de Suelos</Link></li>
                  </ul>
                )}
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <SlChemistry /> <Link to={'/Aplications/chemical'}
                                  className={`${styles.prueba}`} 
                                >Industria Química</Link> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li><Link className={styles.linkstyles} to={'/Aplications/chemical/plasticRubber'}>Plástico y Cauchco</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/chemical/chemicalCompounds'}>Compuesto Químico</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/chemical/chemicalCalciumSalts'}>Sales de Calcio</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <MdOutlineGasMeter /> <Link to={'/Aplications/flueGasTreatment'} className={`${styles.prueba}`}>Tratamiento de Gases & Combustión</Link>
              </li>
              <li>
                <SiEquinixmetal /> <Link to={'/Aplications/glassCeramic'} className={`${styles.prueba}`}>Cerámica & Vidrio</Link>
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <LuConstruction /><Link to={'/Aplications/steel'}
                                    className={`${styles.prueba}`}
                                  >Hierro & Acero</Link> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li><Link className={styles.linkstyles} to={'/Aplications/steel/iron'}>Producción de Hierro</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/steel/acero'}>Producción de Acero</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <AiOutlineGold /> <Link to={'/Aplications/noFerrousMining'} className={`${styles.prueba}`}>Minería & Metales No Ferrosos</Link>
              </li>
              <li>
                <LiaNewspaper /> <Link to={'/Aplications/pccPulPaper'} className={`${styles.prueba}`}>Pulpa & Papel</Link>
              </li>
              <li 
                className={`${styles.prueba}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaHandHoldingWater /><Link to={'/Aplications/waterTreatment'}
                                        className={`${styles.prueba}`}
                                      >Tratamiento de Agua</Link> 
                <span className={styles.triangulo2}></span>
                {hovered && (
                  <ul className={`${styles.dropUnoPuntoUno} ${styles.dropdowns2Nivel}`}>
                    <li><Link className={styles.linkstyles} to={'/Aplications/waterTreatment/drinkWater'}>Agua Potable</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/waterTreatment/wasteWater'}>Aguas Residuales</Link></li>
                    <li><Link className={styles.linkstyles} to={'/Aplications/waterTreatment/industryWater'}>Tratamiento Industrial del Agua</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </li>
          <li>
            <Link to={'/products'} className={`${styles.triangulo} ${styles.menuPrincipal} `}>Productos</Link>
            <ul id={styles.dropDos} className={`${styles.dropdowns}`}>
              <li>
                <Link to={'/products/cales'} className={styles.subProductos}>Productos Calcarios</Link>
                <ul className={styles.specialDropDos}>
                  <li><Link to={'/products/cales/quicklime'} className={`${styles.prueba}`}>Cal Viva</Link></li>
                  <li 
                    className={`${styles.hidratada}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                  <Link to={'/products/cales/hydratedlime'} className={`${styles.prueba}`}>Cal Hidratada</Link> 
                  <GoTriangleRight/>
                    <ul className={`${styles.dropUnoPuntoDos}`}>
                      <li><Link className={styles.linkstyles} to={'/products/cales/hydratedlimeTipoA'}>Hidratada Tipo A</Link></li>
                      <li><Link className={styles.linkstyles} to={'/products/cales/hydratedlimeTipoB'}>Hidratada Tipo B</Link></li>
                    </ul>
                  </li>
                  <li><Link to={'/products/cales/dolomiticlime'} className={`${styles.prueba}`}>Cal Dòlomita</Link></li>
                  <li><Link to={'/products/cales/agriculturallime'} className={`${styles.prueba}`}>Cal Agricola</Link></li>
                  <li><Link to={'/products/distriburionNetwork'} id={styles.resaltarOrange} className={`${styles.prueba}`}>Red de Distribución</Link></li>
                </ul>
              </li>
              <li>
                <Link to={'/products/stone'} className={styles.subProductos}>Piedra Caliza</Link>
                <ul>
                  <li><Link to={'/products/stone/limestone'} className={`${styles.prueba}`}>Agregados</Link></li>
                  <li><Link to={'/products/stone/carbonate'} className={`${styles.prueba}`}>Carbonato</Link></li>
                </ul>
              </li>
              <li>
                <Link className={styles.subProductos}>Productos Especiales</Link>
                <ul>
                  <li><Link to={'/products/neutramol'} className={`${styles.prueba}`}>Neutramol</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><Link to={changeCarmeuseMas} className={`${styles.menuPrincipal}`}>Carmeuse <BsFillPlusSquareFill id={styles.carmeuseMas}/></Link></li>

          <li><Link to={'/services'} className={`${styles.menuPrincipal} `}>Servicios</Link></li>
        </ul>
        <div className={styles.contactAndLogin}>
        {
          !localStorageFillUp
          ? <IoPersonOutline onClick={()=>handleClickNavigate('/sigIn')} />
          : <PopoverLogin infoAvatar={selectorLoginClientToken? selectorLoginStateClient: selectorLoginStateEmployee} />
        }
          {/* <IoPersonOutline onClick={() => handleClickNavigate('/sigIn')}/> */}
          <button onClick={() => handleClickNavigate('/contact')} className={`${styles.boton} ${styles.menuPrincipal} `}>Contacto</button>
        </div>
      </nav>
      <div className={styles.LogoMenuMobil}>
        <div className={styles.contenedorLogo}>
          <Link to={'/'}>
            <img 
              src={logoChange} 
              alt="logo" 
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>
        <div className={styles.contenedorIcons}>
          <div>
            {
              logoPersonOPover
            }
          </div>
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
          <li onClick={() => handleClickNavigate(selectorLoginClientToken?'/sigIn/dashBoardClient': selectorLoginEmployeeToken?'/sigIn/dashBoardEmployee':'/carmeuseMas')} > 
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
