import React, { useState } from 'react'
import styles from './secondRowX3.module.css';
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Img } from '../../cards/row_2Card_1Img/row_2Card_1Img';



export const SecondRowX3 = () => {

  const [ data, setData ] = useState([  
    {
      id: 1,
      image: "uno",
      description: 'Apoyo a la educación infantil en la Danta, Antioquia ',
      link:'newOne'
    },
    {
      id: 2,
      image: "dos",
      description: 'Mejorando la calida de los rios y los habitantes',
      link:'newTwo'
    },
    {
      id: 3,
      image: "imgUno",
      description: 'Nuestro porgreso es el progreso de la comunidad, brindando oportunidades laborales',
      link:'newThree'
    },
  ])
  return (
    
    <div className={``}>
      
      <DataContext.Provider value={data}>
        <Row_2Card_1Img/>
      </DataContext.Provider>      
    </div>
  )
}
