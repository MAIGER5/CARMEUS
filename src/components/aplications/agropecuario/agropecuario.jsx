import React, { useState } from 'react';
import styles from './agropecuario.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const Agropecuario = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'agropecuario1',
      title: "AGROPECUARIO",
      description: 'Los agricultores de todo Colombia confían en nuestras soluciones y conocimientos para mejorar la fertilidad del suelo, impulsar la producción de cultivos y alimentar a sus animales, centrándose en una agricultura eficiente. Carmeuse Colombia también es un proveedor líder de productos utilizados en una amplia gama de alimentos y bebidas de uso cotidiano, sin olvidar el refinado de azúcar y la producción de fertilizantes.',
    }
  ])

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "sugar",
      description: 'Producción de Azúcar',
      link: 'Aplications/agropecuario/sugar'
    },
    {
      id: 2,
      image: "animal",
      description: 'Cuidado Animal',
      link: 'Aplications/agropecuario/animal'
    },
    {
      id: 3,
      image: "food",
      description: 'Industria Alimentaria',
      link: 'Aplications/agropecuario/food'
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
