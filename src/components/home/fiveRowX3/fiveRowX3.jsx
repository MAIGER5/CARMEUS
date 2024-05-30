import React, { useState } from 'react';
import styles from './fiveRowX3.module.css';
import DataContext from '../../dataContext/dataContext';
import { Row_1Text_2Card } from '../../cards/row_1Text_2Card/row_1Text_2Card';


export const FiveRowX3 = () => {

    const [ data3, setData3 ] = useState([  
  
      {
        id: 1,
        title: "COMPONENTE FIVE",
        image: "ocho",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
        buttomInfo: 'Productos & Servicios',
      },
      {
        id: 2,
        title: "nada",
        image: "siete",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
        buttomInfo: 'Productos & Servicios',
      },
      {
        id: 3,
        title: "nada",
        image: "nada",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        buttomInfo: 'Productos & Servicios',
      },
  
    ])
  
  
    return (
      <div className={``}>
        <DataContext.Provider value={data3}>
          <Row_1Text_2Card/>
        </DataContext.Provider>      
      </div>
    )
  }
  