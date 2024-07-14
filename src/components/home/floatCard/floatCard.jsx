import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { CardFloat } from '../../cards/cardFloat/cardFloat';


export const FloatCard = () => {

  const [ data6, setData6 ] = useState([

    {
      id:1,
      image: 'floatImg',
      title: "Trabaja con Nosotros",
      title1: 'NUESTRAS MARCAS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
      infoButtom: "Contactanos",
    }
  ])
  
  return (
    <DataContext.Provider value={data6}>
      <CardFloat/>
    </DataContext.Provider>
  )
}
