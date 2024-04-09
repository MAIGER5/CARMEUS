import React, { useState } from 'react';
import styles from './carrusel.module.css'
import { Card } from './card';

const infoCards = [ 
  {
    id: 1,
    image:"https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis labore similique architecto ea, reprehenderi.'
  },
  {
    id: 2,
    image:"https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis labore similique architecto ea, reprehenderi.'
  },
  {
    id: 3,
    image:"https://colomaconsultores.cl/wp-content/uploads/2020/09/Coloma-mercado-cal-mineria-chile-2020.jpg",
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis labore similique architecto ea, reprehenderi.'
  },

]


export const Carrusel = () => {

  const [activeIndex, setActiveIndex ] = useState(0)

  
  const handlePointClick = (index)=>{
    setActiveIndex(index);
  }


  return (
    <div className={` ${styles.carrousel}`}>
      <div className={styles.grande} style={{transition: 'all .5s ease', transform: `translateX(${activeIndex * -33.33}%)` }}>

        {
          infoCards.map((ele, index)=>
            <Card className={styles.cardsIndiv}
              key={index}
              image={ele.image}
              title={ele.title}
            />
            // <img key={index} src={ele} alt="" className={styles.imagen}/>
          )
        }
      </div>
      <ul className={styles.puntos}>
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className={`${styles.punto} ${activeIndex === index ? styles.activo : ''}`}
            onClick={() => handlePointClick(index)}
          ></li>
        ))}      
      </ul>
    </div>
  )
}
