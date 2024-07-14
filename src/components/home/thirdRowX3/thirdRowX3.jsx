import React, { useState } from 'react'
import DataContext from '../../dataContext/dataContext';
import { Row_1Text_2Card } from '../../cards/row_1Text_2Card/row_1Text_2Card';



export const ThirdRowX3 = () => {

  const [ data1, setData1 ] = useState([  

    {
      id: 1,
      title: "SOLUCIONES PARA LA INDUSTRIA",
      image: "building",
      description: 'Carmeuse Colombia es un líder de la industria, no solo por la variedad de productos de cal y piedra caliza que ofrecemos, sino también por los equipos personalizados y las soluciones de ingeniería que brindamos para sus necesidades de planta, almacenamiento y transferencia de productos.',
      buttomInfo: 'Todas Nuestras Aplicaciones',
      link: '/Aplications'
    },
    {
      id: 2,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "iron",
      description: 'Siderúrgica',
      buttomInfo: 'Productos & Servicios',
      link: '/Aplications/steel'
    },
    {
      id: 3,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "chemical1",
      description: 'Químico',
      link: '/Aplications/chemical'
    },

  ])


  return (
    <div>
      <DataContext.Provider value={data1}>
        <Row_1Text_2Card/>
      </DataContext.Provider>      
    </div>
  )
}
