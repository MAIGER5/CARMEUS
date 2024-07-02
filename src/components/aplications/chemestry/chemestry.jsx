import React, { useState } from 'react';
import styles from './chemestry.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const Chemestry = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'chemistry',
      title: "QUIMICA",
      description: 'Los productos de carmeuse se utilizan en todo tipo de aplicaciones, desde la producción de compuestos químicos, piezas de automóviles, plásticos, pinturas, caucho, grasas y lubricantes hasta el curtido comercial de pieles. Incluso se utilizan en algunos dentífricos como agentes abrasivos suaves. La cal se utiliza, por supuesto, como álcali en la industria química, pero también como fuente de calcio, agentes caustificantes, coadyuvantes de secado, agentes saponificantes, agentes aglutinantes, floculantes, lubricantes y cargas.',
    }
  ])

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "plasticoCaucho",
      description: 'Plástico & Caucho',
      link: 'plasticRubber'
    },
    {
      id: 2,
      image: "compuestoQuimico",
      description: 'Compuesto Químico',
      link: 'chemicalCompounds'
    },
    {
      id: 3,
      image: "salesCalcio",
      description: 'Sales de Calcio',
      link: 'chemicalCalciumSalts'
    },
  ])

  return (
    <div className={styles.contenedor}>
      <DataContext.Provider value={dataScreen}>
        <ScreenForm1/>
      </DataContext.Provider>
      <div className={styles.aplications}> 
        <DataContext.Provider value={dataCard1ApliOpcional}>
          <CardAplications/>
        </DataContext.Provider>
      </div>
    </div>
  )
}
