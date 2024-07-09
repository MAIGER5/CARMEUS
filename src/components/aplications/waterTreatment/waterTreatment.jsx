import React, { useState } from 'react';
import styles from './waterTreatment.module.css';
import DataContext from '../../dataContext/dataContext';
import { CardAplications } from '../../cards/cardAplications/cardAplications';
import { ScreenForm1 } from '../../screens/screenFom1';



export const WaterTreatment = () => {

  const [ dataScreen ] = useState([

    {
      id:1,
      image: 'water',
      title: "TRATAMIENTO DEL AGUA",
      description: 'Los productos de cal de Carmeuse Colombia desempeñan un papel importante en el tratamiento del agua. Al convertir el agua natural en agua potable, la cal se utiliza para eliminar impurezas y determinados metales, en el ablandamiento y la mineralización posteriores al tratamiento. La cal también se utiliza para ayudar a tratar las aguas residuales con el fin de garantizar que los vertidos cumplan los requisitos medioambientales. ',
    }
  ])

  const [ dataCard1ApliOpcional, setdataCard1ApliOpcional] = useState([  
    {
      id: 1,
      image: "agua1",
      description: 'Agua Potable',
      link: 'Aplications/waterTreatment/drinkWater'
    },
    {
      id: 2,
      image: "wasteWater",
      description: 'Tratamiento de Aguas Residuales',
      link: 'Aplications/waterTreatment/wasteWater'
    },
    {
      id: 3,
      image: "agua",
      description: 'Tratamiento Industrial del Agua',
      link: 'Aplications/waterTreatment/industryWater'
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
