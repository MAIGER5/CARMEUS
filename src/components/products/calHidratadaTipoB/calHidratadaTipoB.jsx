import React, { useState } from 'react';
import styles from './calHidratadaTipoB.module.css';
import DataContext from '../../dataContext/dataContext';
import { ScreenForm1 } from '../../screens/screenFom1';
import { CardText_X2_Prod } from '../../cards/cardText_X2_Prod/cardText_X2_Prod';
import { CardProtoypeProd } from '../../cards/cardProtoypeProd/cardProtoypeProd';
import { CardMercados } from '../../cards/cardMercados/cardMercados';
import { CardDatasheet } from '../../cards/cardDatasheet/cardDatasheet';
import { CardUses } from '../../cards/cardUses/cardUses';
import dataCalHidratada from '../../utils/data/dataCalHidratada';


export const CalHidratadaTipoB = () => {

  const data = dataCalHidratada;

  const [ dataScreen ] = useState(data.Screen)
  const [ dataCardProduct ] = useState(data.CardProduct)
  const [ dataCardTexct ] = useState(data.CardTexct)
  const [ dataCardUses ] = useState(data.CardUses)
  const [ dataMercados ] = useState(data.Mercados)
  const [ dataSheet ] = useState(data.Sheet)




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
      <DataContext.Provider value={dataCardUses} >
        <CardUses/>
      </DataContext.Provider>
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