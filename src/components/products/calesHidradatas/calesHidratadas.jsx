import React, { useState } from 'react';
import styles from './calesHidratadas.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const CalesHidratadas = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'hidratada',
      title: "CALES HIDRATADAS",
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ])

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "caltipaA",
      description: 'Cal Hidratada Tipo A',
      link: 'products/cales/hydratedlimeTipoA'
    },
    {
      id: 2,
      image: "caltipoBPlus",
      description: 'Cal Hidratada Tipo B+',
      link: 'products/cales/hydratedlimeTipoB+'
    },
    {
      id: 1,
      image: "tipoBSolo",
      description: 'Cal Hidratada Tipo B',
      link: 'products/cales/hydratedlimeTipoB'
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
