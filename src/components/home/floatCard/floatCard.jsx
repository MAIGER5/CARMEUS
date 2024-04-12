import React, { useState } from 'react';
import DataContext from '../../dataContext/dataContext';
import { CardFloat } from '../../cards/cardFloat/cardFloat';


export const FloatCard = () => {

  const [ data6, setData6 ] = useState([

    {
      id:1,
      image: "https://cdn-web-content.srk.com/upload/baseentities/353/P_Underground-Mine-Engineering2019110623493854020200422004922180.webp",
      title: "Titulo de la Card",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque soluta explicabo. Quos saepe amet dolore quis vero. Earum odio quaerat sapiente veniam' ,
      infoButtom: "contactanos",
    }
  ])
  
  return (
    <DataContext.Provider value={data6}>
      <CardFloat/>
    </DataContext.Provider>
  )
}
