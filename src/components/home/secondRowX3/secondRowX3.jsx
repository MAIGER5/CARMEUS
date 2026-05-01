import React, { useState } from 'react'
import styles from './secondRowX3.module.css';
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Img } from '../../cards/row_2Card_1Img/row_2Card_1Img';



export const SecondRowX3 = () => {

  const [ data, setData ] = useState([  
    {
      id: 1,
      image: "uno",
      description: 'Planeta ',
      link:'newOne'
    },
    {
      id: 2,
      image: "dos",
      description: 'Gente',
      link:'newTwo'
    },
    {
      id: 3,
      image: "imgUno",
      description: 'Sostenibilidad: Nuestro Compromiso con el Medio Ambiente y la Comunidad',
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
