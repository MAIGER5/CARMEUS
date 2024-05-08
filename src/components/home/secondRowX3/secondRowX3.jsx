import React, { useState } from 'react'
import styles from './secondRowX3.module.css';
import DataContext from '../../dataContext/dataContext';
import { Row_2Card_1Img } from '../../cards/row_2Card_1Img/row_2Card_1Img';



export const SecondRowX3 = () => {

  const [ data, setData ] = useState([  
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG88lIZ2nsmo2oCRx0GlvBmOFmbwlF3MV2DPqkShMcg&s",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
    },
    {
      id: 2,
      image: "https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, excepturi voluptate distinctio soluta debitis ipsam perspiciatis laboriosam !',
    },
    {
      id: 3,
      image: "https://www.xylem.com/es-pr/solutions/mining--quarrying--aggregates/contentassets/mining-industry.jpg",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptates accusantium ducimus labore sequi soluta',
    },
  ])
  return (
    
    <div className={``}>
      
      <DataContext.Provider value={data}>
        <Row_2Card_1Img/>
      </DataContext.Provider>      
    </div>
  )
}
