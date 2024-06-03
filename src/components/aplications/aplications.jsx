import React, { useState } from 'react'
import styles from './aplications.module.css';
import DataContext from '../dataContext/dataContext';
import { ScreenForm1 } from '../screens/screenFom1';
import { SecondRowX3 } from '../home/secondRowX3/secondRowX3';
import { Row_2Card_1Img } from '../cards/row_2Card_1Img/row_2Card_1Img';
import { Row_1Img_2Card } from '../cards/row_1Img_2Card/row_1Img_2Card';
import { Row_1Img_1Img } from '../cards/row_1Img_1Img/row_1Img_1Img';
import { CardAplications } from '../cards/cardAplications/cardAplications';






export const Aplications = () => {


  const [ dataScreenApli, setDataScreenApli ] = useState([
    {
      id:1,
      image: 'ocho',
      title: "APLICACIONES",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
    }
  ]);

  const [ dataCard1Apli, setdataCard1Apli] = useState([  
    {
      id: 1,
      image: "Agriculture",
      description: 'Soluciones Agricolas',
    },
    {
      id: 2,
      image: "building",
      description: 'Construcción',
    },
    {
      id: 3,
      image: "chemical3",
      description: 'Industria Química',
    },
  ]);

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "agriculture2_ctqakk",
      description: 'Soluciones Agricolas',
    },
    {
      id: 2,
      image: "Agriculture",
      description: 'Agricultura',
    },
    {
      id: 3,
      image: "Agriculture",
      description: 'Ingenieria Civil & Construcción',
    },
    {
      id: 4,
      image: "Agriculture",
      description: 'Industria Química',
    },
    {
      id: 5,
      image: "Agriculture",
      description: 'Tratamiento de Gases & Combustión',
    },
    {
      id: 6,
      image: "Agriculture",
      description: 'Cerámica & Vidrio',
    },
    {
      id: 7,
      image: "Agriculture",
      description: 'Hierro & Acero',
    },
    {
      id: 8,
      image: "Agriculture",
      description: 'Minería & Metales No Ferrosos',
    },
    {
      id: 9,
      image: "Agriculture",
      description: 'PCC y Pulpa & Paper',
    },
    {
      id: 10,
      image: "Agriculture",
      description: 'Tratamiento de Agua',
    },
    {
      id: 11,
      image: "Agriculture",
      description: 'Canal Retails',
    },


  ])

  return (
    <div className={styles.contenedor}>

      <DataContext.Provider value={dataScreenApli}>
        <ScreenForm1/>
      </DataContext.Provider>

      <div className={styles.cardX3}> 
        <DataContext.Provider value={dataCard1Apli}>
          <Row_2Card_1Img/>
        </DataContext.Provider>

        <DataContext.Provider value={dataCard1Apli}>
          <Row_1Img_2Card/>
        </DataContext.Provider>

        <DataContext.Provider value={dataCard1Apli}>
          <Row_1Img_1Img/>
        </DataContext.Provider>
      </div>

      <div className={styles.cardX3}> 
        <DataContext.Provider value={dataCard1ApliOpcional}>
          <CardAplications/>
        </DataContext.Provider>
      </div>
      

    </div>
  )
}
