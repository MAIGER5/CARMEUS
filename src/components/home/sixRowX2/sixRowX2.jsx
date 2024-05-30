import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Row_1Text_1Img } from '../../cards/row_1Text_1Img/row_1Text_1Img';

export const SixRowX2 = () => {

  const [ data4, setData4 ] = useState([  

    {
      id: 1,
      title: "COMPONENTE SIX",
      image: "nueve",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 2,
      title: "nada",
      image: "nueve",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 3,
      title: "nueve",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttomInfo: 'Productos & Servicios',
    },

  ])


  return (
    <div className={``}>
      <DataContext.Provider value={data4}>
        <Row_1Text_1Img/>
      </DataContext.Provider>      
    </div>
  )
}
