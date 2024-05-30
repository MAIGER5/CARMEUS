import React, { useState } from 'react'
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Text } from '../../cards/row_2Card_1Text/row_2Card_1Text';



export const FourRowX3 = () => {

  const [ data2, setData2 ] = useState([  

    {
      id: 1,
      title: "SOLUCIONES QUE HACEN LA DIFERENCIA",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 2,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "seis",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 3,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "cinco-2",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttomInfo: 'Productos & Servicios',
    },

  ])


  return (
    <div className={``}>
      <DataContext.Provider value={data2}>
        <Row_2Card_1Text/>
      </DataContext.Provider>      
    </div>
  )
}
