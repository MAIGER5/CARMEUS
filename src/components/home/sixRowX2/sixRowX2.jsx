import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { Row_1Text_1Img } from '../../cards/row_1Text_1Img/row_1Text_1Img';

export const SixRowX2 = () => {

  const [ data4, setData4 ] = useState([  

    {
      id: 1,
      title: "Componente SIX",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 2,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
      buttomInfo: 'Productos & Servicios',
    },
    {
      id: 3,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
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
