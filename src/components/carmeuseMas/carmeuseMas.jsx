import React, { useState } from 'react';
import styles from './carmeuseMas.module.css';
import dataScreen from '../utils/data/dataScreen';
import DataContext from '../dataContext/dataContext';
import { ScreenForm2 } from '../screens/screenForm2';

export const CarmeuseMas = () => {

  const [data] = useState(dataScreen.carmeuseMasScreen);


  return (
    <div className={styles.contenedor}>
      <DataContext.Provider value={data}>
        <ScreenForm2/>
      </DataContext.Provider>
    </div>
  )
}
