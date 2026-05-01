import React, { useState } from 'react'
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Text } from '../../cards/row_2Card_1Text/row_2Card_1Text';



export const FourRowX3 = () => {

  const [ data2, setData2 ] = useState([  

    {
      id: 1,
      title: "PRODUCTOS QUE HACEN LA DIFERENCIA",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'Carmeuse Colombia ofrece diferentes productos de cal, lo que nos permite brindar el producto ideal para cada cliente. Trabajamos para comprender las particularidades de los mercados y así ofrecer la mejor solución para cada cliente.',
      buttomInfo: 'Nuestros Productos',
      link: '/products'
    },
    {
      id: 2,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "cales1",
      description: 'Cal Viva',
      buttomInfo: 'Productos & Servicios',
      link: '/products/cales/quicklime'
    },
    {
      id: 3,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "calViva",
      description: 'Cal Hidratada',
      buttomInfo: 'Productos & Servicios',
      link: '/products/cales/hydratedlime'
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
