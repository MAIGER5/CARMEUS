import React, { useState } from 'react'
import styles from './secondRowX3.module.css';
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Img } from '../../cards/row_2Card_1Img/row_2Card_1Img';



export const SecondRowX3 = () => {

  const [ data, setData ] = useState([  
    {
      id: 1,
      image: "uno",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates accusantium ducimus labore sequi soluta',
    },
    {
      id: 2,
      image: "dos",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates accusantium ducimus labore sequi soluta',
    },
    {
      id: 3,
      image: "imgUno",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates accusantium ducimus labore sequi soluta',
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
