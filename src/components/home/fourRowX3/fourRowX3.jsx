import React, { useState } from 'react'
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Text } from '../../cards/row_2Card_1Text/row_2Card_1Text';



export const FourRowX3 = () => {

  const [ data2, setData2 ] = useState([  

    {
      id: 1,
      title: "PRODUCTOS QUE HACEN LA DIFERENCIA",
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'En Carmeuse Colombia, nuestra gente marca la diferencia y trabaja con usted. Nos centramos en sus necesidades específicas y le ofrecemos las soluciones adecuadas donde y cuando las necesite para que nunca tenga que preocuparse',
      buttomInfo: 'Nuestros Productos',
      link: '/products'
    },
    {
      id: 2,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "cinco-2",
      description: 'Cal Hidratada Tipo A',
      buttomInfo: 'Productos & Servicios',
      link: '/products/cales/hydratedlimeTipoA'
    },
    {
      id: 3,
      title: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      image: "calViva",
      description: 'Cal Hidratada Tipo B',
      buttomInfo: 'Productos & Servicios',
      link: '/products/cales/hydratedlimeTipoB'
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
