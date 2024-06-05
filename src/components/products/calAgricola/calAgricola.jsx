import React, { useState } from 'react';
import styles from './calAgricola.module.css';
import DataContext from '../../dataContext/dataContext';
import { ScreenForm1 } from '../../screens/screenFom1';
import { CardText_X2_Prod } from '../../cards/cardText_X2_Prod/cardText_X2_Prod';





export const CalAgricola = () => {

  const [ dataScreen, setDataScreen ] = useState([

    {
      id:1,
      image: 'AboutUs',
      title: "SOMOS CARMEUSE",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
    }
  ])

  const [ dataCardTexct, setDataCardTexct ] = useState([
    {
      id:1,
      title1: "SOMOS CARMEUSE",
      title2: "SOMOS CARMEUSE",
      description1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam  quaerat sapiente veniam bo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
      description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat ' ,
      vineta1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' ,
      vineta2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' ,
      vineta3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' ,

    }
  ])


  return (
    <div className={styles.contenedor}>
      <DataContext.Provider value={dataScreen}>
          <ScreenForm1/>
      </DataContext.Provider>
      <div className={styles.cards}>
        <DataContext.Provider value={dataCardTexct}>
          <CardText_X2_Prod/>
        </DataContext.Provider>
      </div>
    </div>
  )
}