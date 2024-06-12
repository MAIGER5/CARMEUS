import React, { useState } from 'react';
import styles from './calViva.module.css';
import DataContext from '../../dataContext/dataContext';
import { LuDownload } from "react-icons/lu";
import { ScreenForm1 } from '../../screens/screenFom1';
import { CardText_X2_Prod } from '../../cards/cardText_X2_Prod/cardText_X2_Prod';
import { CardProtoypeProd } from '../../cards/cardProtoypeProd/cardProtoypeProd';
import { CardMercados } from '../../cards/cardMercados/cardMercados';
import { SlChemistry } from "react-icons/sl";
import { BsBuildingGear } from "react-icons/bs";
import { LuConstruction } from "react-icons/lu";
import { MdOutlineAgriculture } from "react-icons/md";
import { MdOutlineGasMeter } from "react-icons/md";
import { SiEquinixmetal } from "react-icons/si";
import { FaHandHoldingWater } from "react-icons/fa";
import { LiaNewspaper } from "react-icons/lia";
import { GiMineTruck } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { GiMiningHelmet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { GiMirrorMirror } from "react-icons/gi";
import { CardDatasheet } from '../../cards/cardDatasheet/cardDatasheet';


export const CalViva = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'agricola',
      title: "CAL AGRICOLA",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
    }
  ])

  const [ dataCardProduct, setDataCardProduct ] = useState([
    {
      id:1,
      title1: "CAL AGRICOLA",
      title2: "BENEFICIOS",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
      cifra1: 10.000,
      cifra2: 17,
      cifra3: 50,
      cifra1text: 'Ton de Acero / año',
      cifra2text: 'Ton de Acero / año',
      cifra3text: 'Ton de Acero / año',
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2' ,
      consideraciones: [
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
        'Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia exercitationem iusto reiciendis libero inventore porro nemo autem?' ,
      ]

    }
  ])
  const [ dataCardTexct, setDataCardTexct ] = useState([
    {
      id:1,
      title1: "PRODUCCION & ESPECIFICACIONES",
      title2: "BENEFICIOS",
      description1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
      description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat ' ,
      vineta1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' ,
      vineta2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' ,
      vineta3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,
      formula: 'CaCO3 • MgCO3 + heat --> CaO • MgO + 2 CO2' ,
      especificacion1: 'Calcium content range (CaO): ' ,
      especificacion2: 'Calcium content range (CaO): ' ,
      especificacion3: 'Calcium content range (CaO): ' ,
      especificacion1Text: '56-59%:' ,
      especificacion2Text: '56-59%' ,
      especificacion3Text: '56-59%' ,
    }
  ])

  const [ dataMercados, setDataMercados ] = useState([

    {
      id:1,
      icon: <SlChemistry/>,
      title: "Cal Agricola",
    },
    {
      id:2,
      icon: <BsBuildingGear/>,
      title: "Cal Agricola",
    },
    {
      id:3,
      icon: <LuConstruction/>,
      title: "Cal Agricola",
    },
    {
      id:4,
      icon: <MdOutlineAgriculture/>,
      title: "Cal Agricola",
    },
    {
      id:5,
      icon: <MdOutlineGasMeter/>,
      title: "Cal Agricola",
    },
    {
      id:6,
      icon: <SiEquinixmetal/>,
      title: "Cal Agricola",
    },
    {
      id:7,
      icon: <FaHandHoldingWater/>,
      title: "Cal Agricola",
    },
    {
      id:8,
      icon: <LiaNewspaper/>,
      title: "Cal Agricola",
    },
    {
      id:9,
      icon: <AiOutlineGold/>,
      title: "Cal Agricola",
    },
  ])

  const [ dataSheet, setDataSheet ] = useState([

    {
      id:1,
      title: "Cal Agricola - Español",
      icon: <LuDownload/>
    },
    {
      id:2,
      title: "Cal Agricola - Ingles",
      icon: <LuDownload/>
    },

  ])




  return (
    <div className={styles.contenedor}>
      <DataContext.Provider value={dataScreen}>
          <ScreenForm1/>
      </DataContext.Provider>
      <DataContext.Provider value={dataCardProduct}>
          <CardProtoypeProd/>
      </DataContext.Provider>
      <div className={styles.cards}>
        <DataContext.Provider value={dataCardTexct}>
          <CardText_X2_Prod/>
        </DataContext.Provider>
      </div>
      <div className={styles.cards2}>
        <DataContext.Provider value={dataMercados}>
          <CardMercados/>
        </DataContext.Provider>
      </div>
      <div className={styles.cards2}>
        <DataContext.Provider value={dataSheet}>
          <CardDatasheet/>
        </DataContext.Provider>
      </div>
    </div>
  )
}