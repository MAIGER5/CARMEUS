import React, { useState } from 'react';
import styles from './calAgricola.module.css';
import DataContext from '../../dataContext/dataContext';
import dataCalViva from '../../utils/data/dataCalViva';
import { ScreenForm1 } from '../../screens/screenFom1';
import { CardText_X2_Prod } from '../../cards/cardText_X2_Prod/cardText_X2_Prod';
import { CardProtoypeProd } from '../../cards/cardProtoypeProd/cardProtoypeProd';
import { CardMercados } from '../../cards/cardMercados/cardMercados';
import { CardDatasheet } from '../../cards/cardDatasheet/cardDatasheet';
import dataCalAgricola from '../../utils/data/dataCalAgricola';


export const CalAgricola = () => {

  const data = dataCalAgricola;

  const [ dataScreen, setDataScreen ] = useState(data.Screen)
  const [ dataCardProduct, setDataCardProduct ] = useState(data.CardProduct)
  const [ dataCardTexct, setDataCardTexct ] = useState(data.CardTexct)
  const [ dataMercados, setDataMercados ] = useState(data.Mercados)
  const [ dataSheet, setDataSheet ] = useState(data.Sheet)



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