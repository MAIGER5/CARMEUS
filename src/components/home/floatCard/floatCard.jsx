import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { CardFloat } from '../../cards/cardFloat/cardFloat';


export const FloatCard = () => {

  const [ data6, setData6 ] = useState([

    {
      id:1,
      image: "https://www.portalminero.com/download/attachments/106431527/566ea92c5bee7.jpg?version=1&amp;modificationDate=1450092971313",
      title: "Crece con Nuestros Productos",
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
