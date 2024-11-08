import React, { useState } from 'react'
import styles from './aplications.module.css';
import DataContext from '../dataContext/dataContext';
import { ScreenForm1 } from '../screens/screenFom1';
import { SecondRowX3 } from '../home/secondRowX3/secondRowX3';
import { Row_2Card_1Img } from '../cards/row_2Card_1Img/row_2Card_1Img';
import { Row_1Img_2Card } from '../cards/row_1Img_2Card/row_1Img_2Card';
import { Row_1Img_1Img } from '../cards/row_1Img_1Img/row_1Img_1Img';
import { CardAplications } from '../cards/cardAplications/cardAplications';
import { Row_1Img } from '../cards/row_1Img/row_1Img';






export const Aplications = () => {


  const [ dataScreenApli, setDataScreenApli ] = useState([
    {
      id:1,
      image: 'wasteWater',
      title: "APLICACIONES",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
    }
  ]);

  const [ dataCard1Apli, setdataCard1Apli] = useState([  
    {
      id: 1,
      image: "Agriculture",
      description: 'Soluciones Agricolas',
      link: 'Aplications/agropecuario',
    },
    {
      id: 2,
      image: "building",
      description: 'Ingenieria Civil & Construcción',
      link: 'Aplications/engeneerBuilding'
    },
    {
      id: 3,
      image: "chemical3",
      description: 'Industria Química',
      link: 'Aplications/chemical',
    },
    {
      id: 4,
      image: "desulfuration_mulqte",
      description: 'Tratamiento de Gases & Combustión',
      link: 'Aplications/flueGasTreatment'
    },
    {
      id: 5,
      image: "vidrio",
      description: 'Cerámica & Vidrio',
      link: 'Aplications/glassCeramic'
    },
    {
      id: 6,
      image: "metalurgica_qhjycc",
      description: 'Hierro & Acero',
      link: 'Aplications/steel'
    },
    {
      id: 7,
      image: "construccion_n6hksp",
      description: 'Mineria & Metales No Ferrosos',
      link: 'Aplications/noFerrousMining'
    },
    {
      id: 8,
      image: "paper_mhw9sk",
      description: 'Pulpa & Papel',
      link: 'Aplications/pccPulPaper'
    },
    {
      id: 9,
      image: "agua",
      description: 'Tratamiento de Agua',
      link: 'Aplications/waterTreatment'
    },
  ]);


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
        
        <DataContext.Provider value={dataCard1Apli}>
          <Row_1Img/>
        </DataContext.Provider>
      </div>
    </div>
  )
}
